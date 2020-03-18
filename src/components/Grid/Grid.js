import React from 'react';
import './Grid.css';

class Grid extends React.Component {
    render() {
        const dimensions = 8;
        const squares = [];
        for(let i = 0; i < dimensions; i++) {
            squares.push([]);
            for(let j = 0; j < dimensions; j++) {
                squares[i].push(null);
            }
        }
        for(let i = 0; i < dimensions; i++) {
            for(let j = 0; j <= i; j++) {
                squares[i][j] = <div key={`${i}${j}`} className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}></div>;
                squares[j][i] = <div key={`${i}${j}`} className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}></div>;
            }
        }
        return <div className="grid-container">
            {squares}
        </div>;
    }
}

export default Grid;