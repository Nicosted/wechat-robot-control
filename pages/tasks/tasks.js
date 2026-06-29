const i18n = require('../../utils/i18n');

Page({
  data: {
    sectionTitle: '',
    missionSubtitle: '',
    missionsLabel: '',
    earnLabel: '',
    xpLabel: '',
    starsLabel: '',
    completedLabel: '',
    pendingLabel: '',
    progressLabel: '',
    tasks: [
      { id: 1, titleKey: 'glowMission', emoji: '🐾', reward: 150, done: true, stars: 3, progress: 100 },
      { id: 2, titleKey: 'returnMission', emoji: '🛸', reward: 50, done: false, stars: 1, progress: 45 },
      { id: 3, titleKey: 'safeWalkMission', emoji: '🐶', reward: 200, done: false, stars: 2, progress: 35 },
      { id: 4, titleKey: 'academyMission', emoji: '🎓', reward: 100, done: false, stars: 1, progress: 20 }
    ]
  },

  onLoad() {
    this.updateLanguage();
  },

  onShow() {
    this.updateLanguage();
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().updateSelected();
    }
  },

  updateLanguage() {
    this.setData({
      sectionTitle: i18n.t('todaysMissions'),
      missionSubtitle: i18n.t('completeMissions'),
      missionsLabel: i18n.t('tasks'),
      earnLabel: i18n.t('earn'),
      xpLabel: i18n.t('xp'),
      starsLabel: i18n.t('stars'),
      completedLabel: i18n.t('completed'),
      pendingLabel: i18n.t('pending'),
      progressLabel: i18n.t('complete'),
      tasks: this.data.tasks.map((task) => ({
        ...task,
        title: i18n.t(task.titleKey),
        progressWidth: task.done ? '100%' : `${task.progress}%`
      }))
    });
    wx.setNavigationBarTitle({ title: i18n.t('tasks') });
  },

  toggleTask(e) {
    const { id } = e.currentTarget.dataset
    const tasks = this.data.tasks.map(t =>
      t.id === id
        ? { ...t, done: !t.done, progressWidth: !t.done ? '100%' : `${t.progress}%` }
        : t
    )
    this.setData({ tasks })
  }
});
