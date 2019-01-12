import React from 'react';
import { useState, useEffect } from 'react';

import Actions from '../constants/actions';

import './Grid.scss';

const Grid = ({ n, m, action, onAction }) => {

    const [cells, setCells] = useState(nullCells(n, m));
    const [changedCount, setChangedCount] = useState(0);

    useEffect(() => {
        if (action === Actions.CLEAR) {
            setCells(nullCells(n, m));
            setChangedCount(0);
            onAction(Actions.START);
        }
    });

    const handleCellChange = (i, j) => {
        cells[i][j] = 1 - cells[i][j];
        setChangedCount(changedCount + 1);
    }

    return (
        <div className="Grid__root">
            <table>
                <tbody>
                {cells.map((row, i) => (<tr key={i}>{
                    row.map((value, j) => (
                        <td key={'(' + i + ',' + j + ')'}>
                            <Cell
                                i={i}
                                j={j}
                                value={value}
                                onChange={handleCellChange}
                            />
                        </td>))
                }</tr>))}
                </tbody>
            </table>
        </div>
    );
};

const nullCells = (n, m) => {
    let cells = [];
    for (let i=0; i < m; ++i) {
        let row = [];
        for (let j=0; j < n; ++j) {
            row.push(0);
        }
        cells.push(row);
    }
    return cells;
}


const Cell = ({i, j, value, onChange}) => {

    const handleClick = () => {
        onChange(i, j);
    };
  
    return (
        <i className={"fas fa-square-full" + (value ? " alive" : "")} onClick={handleClick}></i>
    )
};

export default Grid;