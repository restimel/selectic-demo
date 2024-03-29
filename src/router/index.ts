import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'CustomExamples',
    component: Home,
}, {
    path: '/draft',
    name: 'Sandbox',
    component: () => import(/* webpackChunkName: "draft" */ '../views/Draft.vue'),
}, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
