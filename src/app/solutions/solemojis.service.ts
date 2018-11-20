import { ISolEmojisService } from './soliemojis.service';
import { injectable } from 'inversify';

// Super simple service to show how inject works
@injectable()
export class SolEmojisService implements ISolEmojisService {
    private values = {
        'monkey': '🐵',
        'rooster': '🐔'
    };

    public get(key: string): string {
        const emoji = this.values[key];

        if (!emoji) {
            throw new Error('Emoji not found.');
        }

        return emoji;
    }
}

export default new SolEmojisService();