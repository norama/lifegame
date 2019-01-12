class Algorithm {

    constructor(config) {
        this.config = config;
    }

    step(cells) {
        cells[0][0] = 1 - cells[0][0];
        return cells;
    }
}

export default Algorithm;