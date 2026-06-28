const mockDevices = require('../../utils/mockDevices');

Page({
  data: {
    userName: 'Pilot',
    xp: 1250,
    xpMax: 2000,
    xpPercent: 62,
    devices: [],
    selectedDeviceId: ''
  },

  onLoad() {
    const app = getApp();
    const selectedDeviceId = app.globalData.selectedDeviceId || wx.getStorageSync('selectedDeviceId') || 'nanopet';
    this.setData({
      userName: app.globalData.userInfo && app.globalData.userInfo.nickName ? app.globalData.userInfo.nickName : 'Pilot',
      devices: mockDevices,
      selectedDeviceId
    });
  },

  onDeviceTap(e) {
    const { id } = e.currentTarget.dataset;
    const app = getApp();
    app.globalData.selectedDeviceId = id;
    wx.setStorageSync('selectedDeviceId', id);
    this.setData({ selectedDeviceId: id });
    wx.switchTab({ url: '/pages/control/control' });
  },

  goToControl() {
    wx.switchTab({ url: '/pages/control/control' });
  },

  goToTasks() {
    wx.switchTab({ url: '/pages/tasks/tasks' });
  },

  goToProfile() {
    wx.switchTab({ url: '/pages/profile/profile' });
  }
});
