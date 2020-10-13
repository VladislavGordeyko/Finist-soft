import Vue from 'vue';
import Router from 'vue-router';

import MainView from './views/MainView.vue';
import HistoryView from './views/HistoryView.vue';
import PaimentsView from './views/PaimentsView.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      props: true,
    },
    {
      path: '/paiments',
      name: 'paiments',
      component: PaimentsView,
      props: true,
    },
    {
      path: '/operation_history',
      name: 'history',
      component: HistoryView,
      props: true,
    },
  ],
});

export default router;
