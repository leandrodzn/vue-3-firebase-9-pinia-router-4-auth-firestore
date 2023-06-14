import {createRouter, createWebHistory} from 'vue-router';
import { useUserStore } from './stores/user';


const requiredAuth = async(to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    if (user) {
        next();
    }else{
        next('/login')
    }
    userStore.loadingSession = false;
};

const routes = [
    {
        //usar este modo, ya que solo carga al llamar al componente
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue'),
        beforeEnter: requiredAuth
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/Register.vue')
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
