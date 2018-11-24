export default (year: number): number => {
    return ((year - 1900) % 12) + 1;
}

// 1-Rat 鼠, 2-Ox 牛, 3-Tiger 虎, 4-Rabbit 兔, 5-Dragon 龙, 6-Snake 蛇, 7-Horse 马, 8-Goat 羊, 9-Monkey 猴, 10-Rooster 鸡, 11-Dog 狗, 12-Pig 猪