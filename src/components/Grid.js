import React from 'react';
import { useState } from 'react';

import './Grid.scss';

const Grid = ({ n, m }) => {

    let cells = [];
    for (let i=0; i < m; ++i) {
        let row = [];
        for (let j=0; j < n; ++j) {
            row.push(0);
        }
        cells.push(row);
    }

    return (
        <div className="Grid__root">
            <table>
                <tbody>
                {cells.map((row, i) => (<tr key={i}> {
                    row.map((cell, j) => (
                        <td><Cell i={i} j={j} key={'' + i + '-' + j} /></td>
                    ))
                } </tr>))}
                </tbody>
            </table>
        </div>
    );
};


const Cell = ({i, j}) => {

    const [alive, setAlive] = useState(false);

    const handleClick = () => {
        setAlive(!alive);
    };
  
    return (
        <i className={"fas fa-square-full" + (alive ? " alive" : "")} onClick={handleClick}></i>
    )
};

export default Grid;