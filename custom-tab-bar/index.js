const i18n = require('../utils/i18n');

Component({
  data: {
    selected: 0,
    color: '#666',
    selectedColor: '#4ecdc4',
    backgroundColor: '#0f0f1e',
    tabList: [
      { pagePath: '/pages/index/index', text: 'Home', key: 'home', icon: 'home' },
      { pagePath: '/pages/control/control', text: 'Control', key: 'control', icon: 'control' },
      { pagePath: '/pages/tasks/tasks', text: 'Tasks', key: 'tasks', icon: 'tasks' },
      { pagePath: '/pages/academy/academy', text: 'Academy', key: 'academy', icon: 'academy' },
      { pagePath: '/pages/profile/profile', text: 'Profile', key: 'profile', icon: 'profile' }
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
      const tabList = this.data.tabList.map((tab) => ({
        ...tab,
        text: i18n.t(tab.key)
      }));
      const index = tabList.findIndex((tab) => {
        const tabRoute = `/${tab.pagePath}`.replace(/\/+/g, '/').replace(/\/$/, '');
        return tabRoute === normalizedRoute;
      });

      const selected = index >= 0 ? index : 0;
      if (this.data.selected !== selected || tabList.some((tab, tabIndex) => tab.text !== this.data.tabList[tabIndex].text)) {
        this.setData({ selected, tabList });
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
