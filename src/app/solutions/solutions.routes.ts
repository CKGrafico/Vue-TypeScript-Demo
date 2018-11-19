import { RouteConfig } from 'vue-router';

export default (): RouteConfig[] => {
    return [
        {
            path: '/solutions',
            name: 'solutions',
            component: () => import('./Solutions.vue')
        }
    ];
};