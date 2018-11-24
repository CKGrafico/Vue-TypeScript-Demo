const years = {
    9: 'monkey',
    10: 'rooster'
}

export default (chineeseYear: number): string => {
    return years[chineeseYear];
}