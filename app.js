const i18n = require('/utils/i18n');

App({
  onLaunch() {
    i18n.initLanguage();
    console.log('Smart Toy Hub Launch')
  },
  globalData: {
    userInfo: null,
    connectedRobot: null,
    selectedDeviceId: null,
    language: 'en'
  }
})
