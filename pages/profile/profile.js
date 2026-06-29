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
    preferencesLabel: '',
    registeredDevicesLabel: '',
    parentalLockLabel: '',
    supportLabel: '',
    deviceSafetyLabel: '',
    missionsDoneLabel: '',
    totalXpLabel: '',
    levelLabel: '',
    favoriteBuddyValue: '',
    enabledLabel: '',
    onLabel: '',
    chatLabel: '',
    avatarEmoji: '🌟',
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
    selectedLanguageName: 'English',
    languages: []
  },

  onLoad() {
    this._hydrateProfile();
  },

  onShow() {
    this._hydrateProfile();
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().updateSelected();
    }
  },

  _hydrateProfile() {
    const app = getApp();
    const devices = mockDevices;
    const totalXp = devices.reduce((sum, device) => sum + device.xp, 0);
    const totalStars = devices.reduce((sum, device) => sum + device.stars, 0);
    const currentLanguage = i18n.getLanguage();
    const languages = i18n.getLanguageOptions();
    const selectedLanguage = languages.find((language) => language.code === currentLanguage) || languages[0];

    this.setData({
      userInfo: app.globalData.userInfo || { nickName: 'Toy Trainer', avatarUrl: '' },
      devices,
      stats: {
        robotsOwned: devices.length,
        tasksCompleted: 12,
        totalXp,
        stars: totalStars
      },
      currentLanguage,
      selectedLanguageName: selectedLanguage.name,
      languages
    });
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
      languageLabel: i18n.t('language'),
      preferencesLabel: i18n.t('preferences'),
      registeredDevicesLabel: i18n.t('registeredDevices'),
      parentalLockLabel: i18n.t('parentalLock'),
      supportLabel: i18n.t('support'),
      deviceSafetyLabel: i18n.t('deviceSafety'),
      missionsDoneLabel: i18n.t('missionsDone'),
      totalXpLabel: i18n.t('totalXp'),
      levelLabel: i18n.t('levelValue'),
      favoriteBuddyValue: i18n.t('favoriteBuddyValue'),
      enabledLabel: i18n.t('enabled'),
      onLabel: i18n.t('on'),
      chatLabel: i18n.t('chat')
    });
  },

  setLanguage(e) {
    const { code } = e.currentTarget.dataset;
    if (!code || code === i18n.getLanguage()) {
      return;
    }

    i18n.setLanguage(code);
    this.setData({ currentLanguage: code });
    this._refreshVisiblePages();
    this._hydrateProfile();
    wx.showToast({ title: i18n.t('languageUpdated'), icon: 'success' });
  },

  _refreshVisiblePages() {
    const pages = getCurrentPages();
    pages.forEach((page) => {
      if (page && typeof page.updateLanguage === 'function') {
        page.updateLanguage();
      }
    });
  }
});
