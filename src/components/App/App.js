import React from 'react';
import Grid from '../Grid/Grid.js';
import Sidebar from '../Sidebar/Sidebar.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            attempts: 0,
            successes: 0,
            coordinate: '',
            gameInProgress: false,
            displayInnerHTML: '',
            displayStyle: {},
            displayZIndex: 1,
        };
        this.setRandomCoordinate = this.setRandomCoordinate.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.playGame = this.playGame.bind(this);
    }

    playGame() {
        this.setState({displayInnerHTML: '3'});
        setTimeout(() => {
            this.setState({displayInnerHTML: '2'});
            (() => {
                setTimeout(() => {
                    this.setState({displayInnerHTML: '1'});
                    (() => {
                        setTimeout(() => {
                            this.setState({displayInnerHTML: 'Go!',});
                            (() => {
                                setTimeout(() => {
                                    this.setRandomCoordinate();
                                    this.setState({
                                        displayInnerHTML: this.state.coordinate,
                                        gameInProgress: true
                                    });
                                    setTimeout(() => {
                                        this.setState({displayZIndex: -1});
                                    }, 500);
                                    setTimeout(() => {
                                        this.setState({
                                            displayInnerHTML: 'Time!',
                                            displayZIndex: 1,
                                            gameInProgress: false
                                        });
                                    }, 30000);
                                }, 750)
                            })();
                        }, 750);
                    })();
                }, 750);
            })();
        }, 750);
    }

    setRandomCoordinate() {
        const randomFile = String.fromCharCode(97 + Math.floor(Math.random() * 8));
        const randomRow = Math.floor(Math.random() * 8) + 1;
        this.setState({
            coordinate: randomFile + randomRow
        });
    }

    handleSquareClick(event, file, row) {
        if(!this.state.gameInProgress) {
            return;
        }
        const correctFile = this.state.coordinate.charAt(0);
        const correctRow = this.state.coordinate.charAt(1);
        const current = event.target;
        if(file === correctFile && row === correctRow) {
            this.setState(state => {
                return {
                    attempts: state.attempts + 1,
                    successes: state.successes + 1
                }
            });
            current.classList.add('green-glow');
            setTimeout(() => {current.classList.remove('green-glow')}, 150);
        } else {
            this.setState(state => {
                return {
                    attempts: state.attempts + 1,
                    successes: state.successes
                }
            })
            const correct = document.getElementById(`${correctFile + correctRow}`);
            current.classList.add('red-glow');
            correct.classList.add('green-glow');
            setTimeout(() => {
                current.classList.remove('red-glow');
                correct.classList.remove('green-glow');
            }, 150);
        }
        setTimeout(() => {
            this.setRandomCoordinate();
            this.setState({
                displayInnerHTML: this.state.coordinate,
                displayZIndex: 1
            });
            setTimeout(() => {
                if(this.state.gameInProgress) {
                    this.setState({displayZIndex: -1});
                }
            }, 500);
        }, 0);
    }

    componentDidMount() {
        this.setRandomCoordinate();
    }

    render() {
        return (
            <div className="app-container">
                <Grid
                    handleSquareClick={this.handleSquareClick}
                    displayInnerHTML={this.state.displayInnerHTML}
                    displayStyle={this.state.displayStyle}
                    displayZIndex={this.state.displayZIndex}
                />
                <Sidebar playGame={this.playGame}/>
            </div>
        );
    }
}

export default App;