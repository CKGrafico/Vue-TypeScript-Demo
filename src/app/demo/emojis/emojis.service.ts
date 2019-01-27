// Super simple service to show how inject works
// @injectable()
class EmojisService {
    private values = {
        'monkey': '🐵',
        'rooster': '🐔',
        'hatching_chick': '🐣',
        'baby_chick': '🐤',
        'bird': '🐦',
        'penguin': '🐧',
        'dove': '🕊',
        'eagle': '🦅',
        'duck': '🦆',
        'swan': '🦢',
        'char': '🦉',
        'owl': 'owl',
        'peacock': '🦚',
        'parrot': '🦜',
        'frog_face': '🐸',
        'crocodile': '🐊',
        'turtle': '🐢',
        'lizard': '🦎',
        'snake': '🐍',
        'dragon_face': '🐲',
        'dragon': '🐉',
        'sauropod': '🦕',
        't_rex': '🦖',
        'spouting_whale': '🐳',
        'whale': '🐋',
        'dolphin': '🐬',
        'fish': '🐟',
        'tropical_fish': '🐠',
        'blowfish': '🐡',
        'shark': '🦈',
        'octopus': '🐙',
        'spiral_shell': '🐚',
        'snail': '🐌',
        'butterfly': '🦋',
        'bug': '🐛',
        'ant': '🐜',
        'honeybee': '🐝',
        'lady_beetle': '🐞',
        'cricket': '🦗',
        'spider': '🕷',
        'spider_web': '🕸',
        'scorpion': '🦂',
        'mosquito': '🦟',
        'microbe': '🦠',
        'bouquet': '💐',
        'cherry_blossom': '🌸',
        'white_flower': '💮',
        'rosette': '🏵',
        'rose': '🌹',
        'wilted_flower': '🥀',
    };

    public get(key: string): string {
        const emoji = this.values[key];

        if (!emoji) {

        }

        return emoji;
    }
}

export const emojisService = new EmojisService();