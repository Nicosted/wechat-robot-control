const mockDevices = require('../../utils/mockDevices');
const i18n = require('../../utils/i18n');

Page({
  data: {
    toyTrainerLabel: '',
    starsEarnedLabel: '',
    toysUnlockedLabel: '',
    favoriteBuddyLabel: '',
    safetyModeLabel: '',
    settingsLabel: '',
    languageLabel: '',
    userInfo: {
      nickName: 'Toy Trainer',
      avatarUrl: ''
    },
    stats: {
      robotsOwned: 3,
      tasksCompleted: 12,
      totalXp: 1250,
      stars: 45
    },
    devices: [],
    currentLanguage: 'en',
    languages: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'pt', name: 'Português' },
      { code: 'zh', name: '中文' }
    ]
  },

  onLoad() {
    this.updateLanguage();
    const app = getApp();
    const devices = mockDevices;
    const totalXp = devices.reduce((sum, device) => sum + device.xp, 0);
    const totalStars = devices.reduce((sum, device) => sum + device.stars, 0);
    this.setData({
      userInfo: app.globalData.userInfo || { nickName: 'Toy Trainer', avatarUrl: '' },
      devices,
      stats: {
        robotsOwned: devices.length,
        tasksCompleted: 12,
        totalXp,
        stars: totalStars
      },
      currentLanguage: i18n.getLanguage()
    });
  },

  onShow() {
    this.updateLanguage();
  },

  updateLanguage() {
    this.setData({
      toyTrainerLabel: i18n.t('toyTrainer'),
      starsEarnedLabel: i18n.t('starsEarned'),
      toysUnlockedLabel: i18n.t('toysUnlocked'),
      favoriteBuddyLabel: i18n.t('favoriteBody'),
      safetyModeLabel: i18n.t('safetyModeEnabled'),
      settingsLabel: i18n.t('settings'),
      languageLabel: i18n.t('language')
    });
  },

  setLanguage(e) {
    const { code } = e.currentTarget.dataset;
    i18n.setLanguage(code);
    const app = getApp();
    app.globalData.language = code;
    this.setData({ currentLanguage: code });
    this.updateLanguage();
    wx.showToast({ title: 'Language updated', icon: 'success' });
  }
});
