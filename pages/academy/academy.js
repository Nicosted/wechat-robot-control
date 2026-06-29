const i18n = require('../../utils/i18n');

Page({
  data: {
    academyTitle: '',
    academySubtitle: '',
    learningPathLabel: '',
    startLearningBtn: '',
    newLessonsLabel: '',
    completeLabel: '',
    practiceLabel: '',
    lessons: [
      {
        id: 1,
        emoji: '🤖',
        titleKey: 'robotBasics',
        descriptionKey: 'meetToy',
        title: '🤖 Robot Basics',
        description: 'Meet your robot and learn what it can do.',
        progress: 80,
        stars: '★★★★',
        accent: '#FF6B9D',
        accentBg: 'rgba(255, 107, 157, 0.16)'
      },
      {
        id: 2,
        emoji: '🎮',
        titleKey: 'safeControl',
        descriptionKey: 'practiceStop',
        title: '🎮 Safe Control',
        description: 'Practice movement, stop, and return commands.',
        progress: 60,
        stars: '★★★',
        accent: '#4ECDC4',
        accentBg: 'rgba(78, 205, 196, 0.16)'
      },
      {
        id: 3,
        emoji: '💡',
        titleKey: 'simpleCoding',
        descriptionKey: 'tinyCommands',
        title: '💡 Simple Coding',
        description: 'Build tiny command blocks for your robot.',
        progress: 35,
        stars: '★★',
        accent: '#FFE66D',
        accentBg: 'rgba(255, 230, 109, 0.16)'
      },
      {
        id: 4,
        emoji: '🏆',
        titleKey: 'challenges',
        descriptionKey: 'earnRewards',
        title: '🏆 Challenges',
        description: 'Complete missions and earn XP.',
        progress: 20,
        stars: '★',
        accent: '#95E1D3',
        accentBg: 'rgba(149, 225, 211, 0.16)'
      }
    ],
    todayLesson: {
      title: 'Today’s lesson',
      label: 'Spark a safe robot routine',
      note: 'Learn how your robot listens and stops on command.',
      badge: 'Ready'
    }
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
      academyTitle: i18n.t('robotAcademy'),
      academySubtitle: i18n.t('learnPlayTrain'),
      learningPathLabel: i18n.t('learningPath'),
      startLearningBtn: i18n.t('startLearning'),
      newLessonsLabel: i18n.t('newLessonsEveryDay'),
      completeLabel: i18n.t('complete'),
      practiceLabel: i18n.t('practice'),
      todayLesson: {
        title: i18n.t('todayLesson'),
        label: i18n.t('safeRoutineLesson'),
        note: i18n.t('safeRoutineNote'),
        badge: i18n.t('ready')
      },
      lessons: this.data.lessons.map((lesson, index) => ({
        ...lesson,
        title: i18n.t(lesson.titleKey),
        description: i18n.t(lesson.descriptionKey)
      }))
    });
    wx.setNavigationBarTitle({ title: i18n.t('academy') });
  },

  startLearning() {
    wx.showToast({
      title: this.data.startLearningBtn || 'Start Learning',
      icon: 'success',
      duration: 1200
    });
  }
});
