const mockDevices = require('../../utils/mockDevices');
const i18n = require('../../utils/i18n');

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
    actions: [],
    connectedLabel: '',
    standbyLabel: '',
    batteryLabel: '',
    modeLabel: '',
    controlPadLabel: '',
    precisionMovementLabel: '',
    autoPlayLabel: '',
    talkLabel: '',
    glowLabel: '',
    comeBackLabel: '',
    connectLabel: '',
    disconnectLabel: ''
  },

  onLoad(options) {
    this.updateLanguage();
    this._syncDevice(options.id);
  },

  onShow() {
    this.updateLanguage();
    this._syncDevice();
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().updateSelected();
    }
  },

  updateLanguage() {
    this.setData({
      connectedLabel: i18n.t('connected'),
      standbyLabel: i18n.t('standby'),
      batteryLabel: i18n.t('battery'),
      modeLabel: i18n.t('playMode'),
      controlPadLabel: i18n.t('controlPad'),
      precisionMovementLabel: i18n.t('precisionMovement'),
      autoPlayLabel: i18n.t('autoPlay'),
      talkLabel: i18n.t('talk'),
      glowLabel: i18n.t('glow'),
      comeBackLabel: i18n.t('comeBack'),
      connectLabel: i18n.t('connect'),
      disconnectLabel: i18n.t('disconnect')
    });
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
    wx.showToast({ title: 'Demo: Connected', icon: 'success' });
  },

  disconnect() {
    this.setData({ connected: false, status: 'Standby' });
    getApp().globalData.connectedRobot = null;
    wx.showToast({ title: 'Demo: Disconnected', icon: 'none' });
  },

  handleAction(e) {
    const action = e.currentTarget.dataset.action;
    const toyName = this.data.robotName;
    const messages = {
      Up: `Demo: ${toyName} moves forward`,
      Down: `Demo: ${toyName} moves backward`,
      Left: `Demo: ${toyName} turns left`,
      Right: `Demo: ${toyName} turns right`,
      STOP: 'Safety STOP activated',
      Auto: `Demo: Auto play mode on ${toyName}`,
      Voice: `Demo: Voice command to ${toyName}`,
      Lights: `Demo: ${toyName} lights updated`,
      Return: `Demo: ${toyName} returning to base`
    };

    wx.showToast({ title: messages[action] || action, icon: 'none', duration: 1500 });
    if (action === 'STOP') {
      this.setData({ connected: false, status: 'Standby' });
    }
  }
});
