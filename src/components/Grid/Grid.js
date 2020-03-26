import React from 'react';
import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

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
                squares[i][j] = (
                    <div
                        id={(String.fromCharCode(97 + j)) + (8 - i + '')}
                        key={`${i}${j}`}
                        className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
                        onClick={(event) => {this.props.handleSquareClick(event, String.fromCharCode(97 + j), 8 - i + '');}}
                    ></div>
                );
                squares[j][i] = (
                    <div
                        id={(String.fromCharCode(97 + i)) + (8 - j + '')}
                        key={`${i}${j}`}
                        className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
                        onClick={(event) => {this.props.handleSquareClick(event, String.fromCharCode(97 + i), 8 - j + '');}}
                    ></div>
                );
            }
        }
        return <div className="grid-container">
            {squares}
            <div className="display-container" style={{zIndex: this.props.displayZIndex}}>
                <div className="display" style={this.props.displayStyle}>
                    {this.props.displayInnerHTML}
                </div>
            </div>
        </div>;
    }
}

export default Grid;