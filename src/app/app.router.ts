import VueRouter from 'vue-router';
import { Vue } from 'vue-property-decorator';
import { demoModule } from './demo';
import { solutionsModule } from './solutions';

Vue.use(VueRouter);

export function router() {
    return new VueRouter({
        mode: 'history',
        routes: [
            ...demoModule.routes(),
            ...solutionsModule.routes()
        ]
    });
}