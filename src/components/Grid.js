import React from 'react';
import { useState, useEffect } from 'react';

import Actions from '../constants/actions';

import './Grid.scss';

const Grid = ({ algorithm, action, onAction, onFirst, onNext }) => {

    const [cells, setCells] = useState(algorithm.newCells());
    const [changedCount, setChangedCount] = useState(0);
    const [playProcess, setPlayProcess] = useState(null);

    useEffect(() => {

        const init = () => {
            setCells(algorithm.newCells());
            setChangedCount(0);
            onFirst();
        };

        const step = () => {
            setCells(algorithm.step(cells));
            setChangedCount(changedCount => changedCount + 1);
            onNext();
        };

        switch (action) {
            case Actions.CLEAR:
                init();
                onAction(Actions.START);
                break;

            case Actions.STEP:
                step();
                onAction(Actions.START);
                break;

            case Actions.PLAY:
                const process = setInterval(() => {
                    if (action === Actions.PLAY) {
                        step();
                    }
                }, 2000);
                setPlayProcess(process);
                break;

            case Actions.STOP:
                if (playProcess) {
                    clearInterval(playProcess);
                    setPlayProcess(null);
                }
                onAction(Actions.START);
                break;

            default:
                return;
        }
    }, [action]);

    const handleCellChange = (i, j) => {
        cells[i][j] = 1 - cells[i][j];
        setChangedCount(changedCount => changedCount + 1);
        onFirst();
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

const Cell = ({i, j, value, onChange}) => {

    const handleClick = () => {
        onChange(i, j);
    };

    return (
        <i className={"fas fa-square-full" + (value ? " alive" : "")} onClick={handleClick}></i>
    )
};

export default Grid;