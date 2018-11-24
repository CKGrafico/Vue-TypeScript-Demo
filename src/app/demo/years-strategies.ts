import IYearsStrategy from './iyears-strategy';
import calculateChineeseYear from '~/helpers/calculate-chineese-year';
import superComplexHelper from '~/helpers/super-complex-helper';

export const monkeyStrategy: IYearsStrategy = {
    check(year: number) {
        return calculateChineeseYear(year) === 9;
    },
    execute() {
        return 'monkey'; 
    }
};

export const roosterStrategy: IYearsStrategy = {
    check(year: number) {
        return calculateChineeseYear(year) === 10;
    },
    execute() {
        return superComplexHelper(10); 
    }
};