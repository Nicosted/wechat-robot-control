const mockDevices = require('../../utils/mockDevices');

Page({
  data: {
    device: null,
    robotId: '',
    robotName: 'NanoPet',
    connected: false,
    battery: 82,
    mode: 'Companion',
    description: '',
    status: 'Standby',
    accentLabel: 'Companion',
    actions: []
  },

  onLoad(options) {
    this._syncDevice(options.id);
  },

  onShow() {
    this._syncDevice();
  },

  _syncDevice(id) {
    const app = getApp();
    const selectedDeviceId = id || app.globalData.selectedDeviceId || wx.getStorageSync('selectedDeviceId') || 'nanopet';
    const device = mockDevices.find((item) => item.id === selectedDeviceId) || mockDevices[0];

    this.setData({
      device,
      robotId: device.id,
      robotName: device.name,
      connected: device.status === 'Online',
      battery: device.battery,
      mode: device.mode,
      description: device.description,
      status: device.status,
      accentLabel: device.accentLabel,
      actions: device.actions
    });
  },

  connect() {
    this.setData({ connected: true, status: 'Online' });
    wx.showToast({ title: 'Connected', icon: 'success' });
  },

  disconnect() {
    this.setData({ connected: false, status: 'Standby' });
    getApp().globalData.connectedRobot = null;
    wx.showToast({ title: 'Disconnected', icon: 'none' });
  },

  handleAction(e) {
    const action = e.currentTarget.dataset.action;
    const messages = {
      Up: 'Heading up',
      Down: 'Heading down',
      Left: 'Turning left',
      Right: 'Turning right',
      STOP: 'Safety stop engaged',
      Auto: 'Auto mode queued',
      Voice: 'Voice command queued',
      Lights: 'Lighting pattern updated',
      Return: 'Return to base queued'
    };

    wx.showToast({ title: messages[action] || action, icon: 'none' });
    if (action === 'STOP') {
      this.setData({ connected: false, status: 'Standby' });
    }
  }
});
