import { Container } from 'inversify';
import { injectId } from '~/core';
// import { IEmojisService, EmojisService } from './emojis';
// Tip for demo ;)
import * as WrapEmojiService from './emojis';


export default (container: Container) => {
    // All this code is for demo only... don't do that if
    if (WrapEmojiService.EmojisService) {
        container.bind<WrapEmojiService.IEmojisService>(injectId(WrapEmojiService.EmojisService)).to(WrapEmojiService.EmojisService).inSingletonScope();
    }
};