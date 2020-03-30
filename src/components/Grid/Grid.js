import React from 'react';
import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.renderSquares = this.renderSquares.bind(this);
    }

    renderSquares(gridColor) {
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
                const file1 = gridColor === 'white' ? String.fromCharCode(97 + i) : String.fromCharCode(104 - i);
                const file2 = gridColor === 'white' ? String.fromCharCode(97 + j) : String.fromCharCode(104 - j);
                const row1 = gridColor === 'white' ? 8 - j + '' : 1 + j + '';
                const row2 = gridColor === 'white' ? 8 - i + '' : 1 + i + '';
                squares[j][i] = (
                    <div
                        id={file1 + row1}
                        key={`${i}${j}`}
                        className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
                        onClick={(event) => {this.props.handleSquareClick(event, file1, row1);}}
                    ></div>
                );
                squares[i][j] = (
                    <div
                        id={file2 + row2}
                        key={`${i}${j}`}
                        className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
                        onClick={(event) => {this.props.handleSquareClick(event, file2, row2);}}
                    >
                        {
                            this.props.showCoordinates && (j === 0 || i === dimensions - 1) ?
                            file2 + row2 : ''
                        }
                    </div>
                );
            }
        }
        return squares;
    }

    render() {
        return <div className="grid-container">
            {this.renderSquares(this.props.gridColor)}
            <div className="display-container" style={{zIndex: this.props.displayZIndex}}>
                <div className="display" style={this.props.displayStyle}>
                    {this.props.displayInnerHTML}
                </div>
            </div>
        </div>;
    }
}

export default Grid;