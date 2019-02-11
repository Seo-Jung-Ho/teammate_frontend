import Vue from 'vue';
import Router from 'vue-router';

import PageMain from '../pages/PageMain.vue';
import PageLogin from '../pages/PageLogin';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: PageLogin
        },
        {
            path: '/main',
            component: PageMain
        },
    ]
})