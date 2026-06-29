Component({
  data: {
    selected: 0,
    color: '#666',
    selectedColor: '#4ecdc4',
    backgroundColor: '#0f0f1e',
    tabList: [
      { pagePath: '/pages/index/index', text: 'Home', icon: 'home' },
      { pagePath: '/pages/control/control', text: 'Control', icon: 'control' },
      { pagePath: '/pages/tasks/tasks', text: 'Tasks', icon: 'tasks' },
      { pagePath: '/pages/academy/academy', text: 'Academy', icon: 'academy' },
      { pagePath: '/pages/profile/profile', text: 'Profile', icon: 'profile' }
    ]
  },
  attached() {
    this.updateSelected();
  },
  pageLifetimes: {
    show() {
      this.updateSelected();
    }
  },
  methods: {
    updateSelected() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1] || {};
      const route = currentPage.route || currentPage.__route__ || '';
      const normalizedRoute = `/${route}`.replace(/\/+/g, '/').replace(/\/$/, '');
      const index = this.data.tabList.findIndex((tab) => {
        const tabRoute = `/${tab.pagePath}`.replace(/\/+/g, '/').replace(/\/$/, '');
        return tabRoute === normalizedRoute;
      });

      if (index >= 0 && this.data.selected !== index) {
        this.setData({ selected: index });
      } else if (index < 0 && this.data.selected !== 0) {
        this.setData({ selected: 0 });
      }
    },
    switchTab(e) {
      const { index, pagePath } = e.currentTarget.dataset;

      if (this.data.selected === index) {
        return;
      }

      this.setData({ selected: index });
      wx.switchTab({ url: pagePath });
    }
  }
});
