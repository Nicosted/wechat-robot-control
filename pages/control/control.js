Page({
  data: {
    robotId: '',
    robotName: 'Robot',
    connected: false
  },

  onLoad(options) {
    const names = { dog: 'CyberDog', drone: 'SkyHawk', pet: 'NanoPet' }
    const id = options.id || ''
    this.setData({
      robotId: id,
      robotName: names[id] || 'Robot',
      connected: !!id
    })
  },

  connect() {
    this.setData({ connected: true })
    wx.showToast({ title: 'Connected', icon: 'success' })
  },

  disconnect() {
    this.setData({ connected: false })
    getApp().globalData.connectedRobot = null
    wx.showToast({ title: 'Disconnected', icon: 'none' })
  }
})
