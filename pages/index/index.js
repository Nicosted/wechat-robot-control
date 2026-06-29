const mockDevices = require('../../utils/mockDevices');
const i18n = require('../../utils/i18n');

Page({
  data: {
    hub: '',
    hubSubtitle: '',
    chooseBuddy: '',
    moodLabel: '',
    energyLabel: '',
    starsLabel: '',
    quickActions: '',
    play: '',
    train: '',
    learn: '',
    devices: [],
    selectedDeviceId: ''
  },

  onLoad() {
    this.updateLanguage();
    const app = getApp();
    const selectedDeviceId = app.globalData.selectedDeviceId || wx.getStorageSync('selectedDeviceId') || 'nanopet';
    this.setData({
      devices: mockDevices,
      selectedDeviceId
    });
  },

  onShow() {
    this.updateLanguage();
  },

  updateLanguage() {
    this.setData({
      hub: i18n.t('smartToyHub'),
      hubSubtitle: i18n.t('controlTrainPlay'),
      chooseBuddy: i18n.t('chooseYourBuddy'),
      moodLabel: i18n.t('mood'),
      energyLabel: i18n.t('energy'),
      starsLabel: i18n.t('stars'),
      quickActions: i18n.t('quickActions'),
      play: i18n.t('playNow'),
      train: i18n.t('train'),
      learn: i18n.t('learn')
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
