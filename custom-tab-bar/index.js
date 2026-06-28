Component({
  data: {
    selected: 0,
    color: '#666',
    selectedColor: '#4ecdc4',
    backgroundColor: '#0f0f1e',
    tabList: [
      { pagePath: '/pages/index/index', text: 'Home', icon: 'home' },
      { pagePath: '/pages/control/control', text: 'Partners', icon: 'partners' },
      { pagePath: '/pages/tasks/tasks', text: 'Tasks', icon: 'tasks' },
      { pagePath: '/pages/index/index', text: 'Academy', icon: 'academy' },
      { pagePath: '/pages/profile/profile', text: 'Profile', icon: 'profile' }
    ]
  },
  attached() {
    this._setSelectedTab();
  },
  methods: {
    _setSelectedTab() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const route = currentPage ? currentPage.route : '';
      const index = this.data.tabList.findIndex((tab) => {
        const tabRoute = tab.pagePath.replace(/^\//, '');
        return tabRoute === route;
      });

      this.setData({
        selected: index >= 0 ? index : 0
      });
    },
    switchTab(e) {
      const { index, pagePath } = e.currentTarget.dataset;
      console.log('custom tab switch', { index, pagePath });

      if (this.data.selected === index) {
        return;
      }

      this.setData({ selected: index });
      wx.switchTab({ url: pagePath });
    }
  }
});
