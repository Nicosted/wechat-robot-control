Page({
  data: {
    userName: 'Pilot',
    xp: 1250,
    xpMax: 2000,
    xpPercent: 62,
    robots: [
      {
        id: 'dog',
        name: 'CyberDog',
        type: 'dog',
        icon: '🐕',
        online: true,
        battery: 87
      },
      {
        id: 'drone',
        name: 'SkyHawk',
        type: 'drone',
        icon: '🚁',
        online: true,
        battery: 64
      },
      {
        id: 'pet',
        name: 'NanoPet',
        type: 'pet',
        icon: '🤖',
        online: false,
        battery: 12
      }
    ]
  },

  onLoad() {
    const app = getApp()
    if (app.globalData.userInfo && app.globalData.userInfo.nickName) {
      this.setData({ userName: app.globalData.userInfo.nickName })
    }
  },

  onRobotTap(e) {
    const { id } = e.currentTarget.dataset
    const app = getApp()
    app.globalData.connectedRobot = id
    wx.navigateTo({ url: '/pages/control/control?id=' + id })
  },

  goToControl() {
    wx.navigateTo({ url: '/pages/control/control' })
  },

  goToTasks() {
    wx.navigateTo({ url: '/pages/tasks/tasks' })
  },

  goToProfile() {
    wx.navigateTo({ url: '/pages/profile/profile' })
  }
})
