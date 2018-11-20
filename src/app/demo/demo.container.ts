import { Container } from 'inversify';
import { injectId } from '~/core';
import { IEmojisService } from './iemojis.service';
//import EmojisService from './emojis.service';

export default (container: Container) => {
    //container.bind<IEmojisService>(injectId(EmojisService)).to(EmojisService).inSingletonScope();
};