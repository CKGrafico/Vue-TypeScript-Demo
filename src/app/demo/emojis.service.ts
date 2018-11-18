// Super simple service to show how inject works
class EmojisService {
    private values = {
        'monkey': '🐵',
        'chicken': '🐔'
    };

    public get(key: string) {
        const emoji = this.values[key];

        if (!emoji) {
            throw new Error('Emoji not found.');
        }

        return emoji;
    }
}

export default new EmojisService();