import { Inject } from '~/core';
import { ISolEmojisService } from './soliemojis.service';
import BadgeInfo from '~/demo/badge-info.model';
import calculateChineeseYear from '~/helpers/calculate-chineese-year';
import superComplexHelper from '~/helpers/super-complex-helper';

interface IBadgesYearStrategy {
    check(year: number): boolean;
    execute(): string;
}

class SolBadgesStrategyService {
    @Inject() solEmojisService: ISolEmojisService;

    private monkeyStrategy: IBadgesYearStrategy = {
        check(year: number) {
            return calculateChineeseYear(year) === 9;
        },
        execute() {
            return 'monkey';
        }
    }

    private roosterStrategy: IBadgesYearStrategy = {
        check(year: number) {
            return calculateChineeseYear(year) === 10;
        },
        execute() {
            return superComplexHelper(10);
        }
    }

    public generateYearBadge(year: number): BadgeInfo {
        const strategies = [
            this.monkeyStrategy,
            this.roosterStrategy
        ];

        const strategy = strategies.find(x => x.check(year));

        if (!strategy) {
            return;
        }

        const emoji = strategy.execute();

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

export default new SolBadgesStrategyService();