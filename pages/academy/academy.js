Page({
  data: {
    lessons: [
      {
        id: 1,
        title: '🤖 Robot Basics',
        description: 'Meet your robot and learn what it can do.',
        progress: 80,
        stars: '★★★★',
        accent: '#FF6B9D',
        accentBg: 'rgba(255, 107, 157, 0.16)'
      },
      {
        id: 2,
        title: '🎮 Safe Control',
        description: 'Practice movement, stop, and return commands.',
        progress: 60,
        stars: '★★★',
        accent: '#4ECDC4',
        accentBg: 'rgba(78, 205, 196, 0.16)'
      },
      {
        id: 3,
        title: '💡 Simple Coding',
        description: 'Build tiny command blocks for your robot.',
        progress: 35,
        stars: '★★',
        accent: '#FFE66D',
        accentBg: 'rgba(255, 230, 109, 0.16)'
      },
      {
        id: 4,
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

  startLearning() {
    wx.showToast({
      title: 'Start Learning!',
      icon: 'success',
      duration: 1200
    });
  }
});
