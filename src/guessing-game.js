class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.average = Math.floor(((this.min + 1) + this.max) / 2);
        console.log(this.average)
        return this.average;
    }

    lower() {
        this.max = this.average
    }

    greater() {
        this.min = this.average
    }
}

module.exports = GuessingGame;
