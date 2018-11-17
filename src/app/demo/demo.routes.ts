import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
    return [
        {
            path: '/',
            name: 'demo',
            component: () => import('./Demo.vue')
        }
    ];
};