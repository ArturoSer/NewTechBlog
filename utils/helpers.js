module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
        const randomNum = Math.random();

        if (randomNum > 0.6) {
            return `<span for="img" aria-lable="lightbulb"></span>`;
        } else if (randomNum > 0.5) {
            return `<span for="img" aria-label="laptop"></span>`;
        } else {
            return `<span for="img" aria-label="gear"></span>`;
        }
    },
};