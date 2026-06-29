const i18n = require('/utils/i18n');

App({
  onLaunch() {
    i18n.initLanguage();
    this.globalData.language = i18n.getLanguage();
    const storedDeviceId = wx.getStorageSync('selectedDeviceId');
    if (storedDeviceId) {
      this.globalData.selectedDeviceId = storedDeviceId;
    }
    console.log('Smart Toy Hub Launch');
  },
  globalData: {
    userInfo: null,
    connectedRobot: null,
    selectedDeviceId: null,
    language: 'en'
  }
});
