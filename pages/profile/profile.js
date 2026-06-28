Page({
  data: {
    userInfo: {
      nickName: 'Pilot',
      avatarUrl: ''
    },
    stats: {
      robotsOwned: 3,
      tasksCompleted: 12,
      totalXp: 1250
    }
  },

  onLoad() {
    const app = getApp()
    if (app.globalData.userInfo) {
      this.setData({ userInfo: app.globalData.userInfo })
    }
  }
})
