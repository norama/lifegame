import React from 'react';
import { useState } from 'react';

import './Grid.scss';

const size = 20;
const gap = 4;

const Grid = ({ n, m }) => {

    let cells = [];
    for (let i=0; i < m; ++i) {
        let row = [];
        for (let j=0; j < n; ++j) {
            row.push(0);
        }
        cells.push(row);
    }

    const width = n * size + (n + 1) * gap;
    const height = m * size + (m + 1) * gap;

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
            {cells.map((row, i) => (<> {
                row.map((cell, j) => (
                    <Rect i={i} j={j} />
                ))
            } </>))}
        </svg>
    );
};


const Rect = ({i, j}) => {

    const [alive, setAlive] = useState(false);

    const handleClick = () => {
        setAlive(!alive);
    };
  
    return (
        <rect
            x={j * size + (j + 1) * gap}
            y={i * size + (i + 1) * gap}
            width={size}
            height={size}
            onClick={handleClick}
            className={alive ? "alive" : ""}
        />
    )
};

export default Grid;