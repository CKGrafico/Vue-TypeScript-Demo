import { YearsSign } from '~/demo/years';

const years = {
    9: YearsSign.Monkey,
    10: YearsSign.Rooster
};

export default (chineeseYear: number): string => {
    return years[chineeseYear];
};