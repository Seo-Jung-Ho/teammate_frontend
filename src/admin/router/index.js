import Vue from 'vue';
import Router from 'vue-router';

const PageTeam = () => import('../pages/PageTeam');


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/member'
        },
        {
            path: '/member',
            component: () => import('../pages/PageMember')
        },
        {
            path: '/member/edit',
            component: () => import('../pages/PageMemberEdit.vue')
        },
        {
            path: '/member/edit/:id',
            component: () => import('../pages/PageMemberEdit.vue')
        },
        {
            path: '/team',
            component: PageTeam
        }
    ]
})