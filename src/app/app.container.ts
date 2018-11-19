import { Container } from 'inversify';
import * as s from '~/shared';
import { demoModule } from '~/demo';
import { solutionsModule } from '~/solutions';
import { injectId } from '~/core';

// How to inject a dependency
// @Inject() nameService: INameService;

export let container: Container = null;

export function containerBuilder(): Container {
    container = new Container();

    // Bind shared services
    container.bind<s.ITranslateService>(injectId(s.TranslateService)).to(s.TranslateService).inSingletonScope();

    // Bind services for each module
    demoModule.container(container);
    solutionsModule.container(container);

    return container;
}