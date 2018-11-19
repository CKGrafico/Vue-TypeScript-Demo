import { Container } from 'inversify';
import { injectId } from '~/core';
import { ISolEmojisService } from './soliemojis.service';
import { SolEmojisService } from './solemojis.service';

export default (container: Container) => {
    container.bind<ISolEmojisService>(injectId(SolEmojisService)).to(SolEmojisService).inSingletonScope();
};