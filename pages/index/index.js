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
    missionsLabel: '',
    academyLabel: '',
    safeModeLabel: '',
    demoModeLabel: '',
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().updateSelected();
    }
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
      missionsLabel: i18n.t('missions'),
      academyLabel: i18n.t('academy'),
      safeModeLabel: i18n.t('safeMode'),
      demoModeLabel: i18n.t('demoMode'),
      devices: mockDevices.map((device) => this._localizeDevice(device))
    });
    wx.setNavigationBarTitle({ title: i18n.t('home') });
  },

  _localizeDevice(device) {
    const typeKeys = {
      nanopet: 'aiPet',
      skyhawk: 'drone',
      cyberdog: 'robotDog'
    };
    const moodKeys = {
      nanopet: 'happy',
      skyhawk: 'readyMood',
      cyberdog: 'excited'
    };
    return {
      ...device,
      localizedType: i18n.t(typeKeys[device.id] || 'toys'),
      localizedMood: i18n.t(moodKeys[device.id] || 'readyMood'),
      localizedStatus: i18n.t(device.status === 'Online' ? 'online' : 'standby')
    };
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

  goToAcademy() {
    wx.switchTab({ url: '/pages/academy/academy' });
  }
});
