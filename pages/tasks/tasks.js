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
    tasks: [
      { id: 1, title: 'Teach NanoPet a glow trick', reward: 150, done: true, stars: 3 },
      { id: 2, title: 'Guide SkyHawk back home', reward: 50, done: false, stars: 1 },
      { id: 3, title: 'Walk CyberDog safely', reward: 200, done: false, stars: 2 },
      { id: 4, title: 'Finish Robot Academy lesson', reward: 100, done: false, stars: 1 }
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
      pendingLabel: i18n.t('pending')
    });
  },

  toggleTask(e) {
    const { id } = e.currentTarget.dataset
    const tasks = this.data.tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    )
    this.setData({ tasks })
  }
});
