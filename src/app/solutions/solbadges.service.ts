import { Inject } from '~/core';
import { ISolEmojisService } from './soliemojis.service';
import BadgeInfo from '~/demo/badge-info.model';

class SolBadgesService {
    @Inject() solEmojisService: ISolEmojisService;

    public generateYearBadge(year: number): BadgeInfo {
        let emoji: string = null;

        switch (year) {
            case 2016:
                emoji = 'monkey';
                break;
            case 2017:
                emoji = 'rooster';
                break;
            default:
                emoji = null;
        }

        if (!emoji) {
            return;
        }

        return {
            value: this.solEmojisService.get(emoji),
            title: `Registered in the year of ${emoji}.`,
            color: 'red'
        };
    }

    public generateNameBadge(name: string): BadgeInfo {
        const letter = name.slice(0, 1);

        return {
            value: letter,
            color: '#F68381',
            title: `Welcome to ${letter}'s club.`,
            isNotIcon: true
        };
    }

    public generateFollowersBadge(followers: number): BadgeInfo {
        if (followers < 1) {
            return;
        }

        return {
            value: '😲',
            color: '#355C7D',
            title: 'There are people following you!'
        };
    }
}

export default new SolBadgesService();