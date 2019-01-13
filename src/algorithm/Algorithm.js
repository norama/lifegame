import Settings from '../settings';

class Algorithm {

    constructor(config) {
        this.config = config;
    }

    step(cells) {
        let newCells = this.newCells();
        for (let i=0; i < Settings.rows; ++i) {
            for (let j=0; j < Settings.cols; ++j) {
                newCells[i][j] = this.nextValue(cells[i][j], neighbourCount(cells, i, j));
            }
        }
        return newCells;
    }

    nextValue(value, count) {
        const r = value ? 
            count >= this.config.minKeep && count <= this.config.maxKeep :
            count >= this.config.minNew && count <= this.config.maxNew;
        return r ? 1 : 0;
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

function neighbourCount(cells, i, j) {
    let count = 0;
    const ni = neighbourhood(i, Settings.rows - 1);
    const nj = neighbourhood(j, Settings.cols - 1);
    ni.forEach((di) => {
        nj.forEach((dj) => {
            if (di === 0 && dj === 0) {
                // itself, not a neighbor
            } else {
                count += cells[i + di][j + dj];
            }
        });
    });
    return count;
}

function neighbourhood(k, max) {
    let n = [];
    if (k > 0) {
        n.push(-1);
    }
    n.push(0);
    if (k < max) {
        n.push(1);
    }
    return n;
}

export default Algorithm;