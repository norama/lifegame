import Settings from '../settings';

class Algorithm {

    constructor(config) {
        this.config = config;
    }

    step(cells) {
        cells[0][0] = 1 - cells[0][0];
        return cells;
    }

    newCells() {
        let cells = [];
        for (let i=0; i < Settings.rows; ++i) {
            let row = [];
            for (let j=0; j < Settings.cols; ++j) {
                row.push(0);
            }
            cells.push(row);
        }
        return cells;
    }
}

export default Algorithm;