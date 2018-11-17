import { Vue } from 'vue-property-decorator';

import { vendor } from './vendor';
import { router } from './app.router';
import { containerBuilder } from './app.container';
import { Filters } from './app.filters';
import App from './App.vue';

export class AppModule {
    constructor() {
        containerBuilder();

        Vue.use(new Filters());
        vendor.forEach(library => Vue.use(library));

        this.bootstrap();
    }

    private async bootstrap(): Promise<Vue> {
        let options = {
            el: '.main',
            router: router(),
            render: create => create(App)
        };

        return new Vue(options);
    }
}

new AppModule();
