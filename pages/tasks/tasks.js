Page({
  data: {
    tasks: [
      { id: 1, title: 'SkyHawk patrol route', reward: 150, done: true },
      { id: 2, title: 'NanoPet charge to 80%', reward: 50, done: false },
      { id: 3, title: 'CyberDog follow target', reward: 200, done: false },
      { id: 4, title: 'Return NanoPet to base', reward: 100, done: false }
    ]
  },

  toggleTask(e) {
    const { id } = e.currentTarget.dataset
    const tasks = this.data.tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    )
    this.setData({ tasks })
  }
})
