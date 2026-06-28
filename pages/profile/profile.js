const mockDevices = require('../../utils/mockDevices');

Page({
  data: {
    userInfo: {
      nickName: 'Pilot',
      avatarUrl: ''
    },
    stats: {
      robotsOwned: 3,
      tasksCompleted: 12,
      totalXp: 1250
    },
    devices: []
  },

  onLoad() {
    const app = getApp();
    const devices = mockDevices;
    const totalXp = devices.reduce((sum, device) => sum + device.xp, 0);
    this.setData({
      userInfo: app.globalData.userInfo || this.data.userInfo,
      devices,
      stats: {
        robotsOwned: devices.length,
        tasksCompleted: 12,
        totalXp
      }
    });
  }
});
