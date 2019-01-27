import IYearsStrategy from './iyears-strategy';
import calculateChineeseYear from '~/helpers/calculate-chineese-year';
import superComplexHelper from '~/helpers/super-complex-helper';
import { YearsSign } from './years-sign.enum';

export const monkeyStrategy: IYearsStrategy = {
    check(year: number) {
        return calculateChineeseYear(year) === 9;
    },
    execute() {
        return YearsSign.Monkey; 
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

export const dogStrategy: IYearsStrategy = {
    check(year: number) {
        return calculateChineeseYear(year) === 11;
    },
    execute() {
        return superComplexHelper(11); 
    }
};