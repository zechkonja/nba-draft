import Vue from 'vue';
import Router from 'vue-router';
import Players from '@/components/Players';
import Player from '@/components/Player';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Players',
      component: Players,
    },
    {
      path: '/profile/:id',
      name: 'Player',
      component: Player,
    },
  ],
});
