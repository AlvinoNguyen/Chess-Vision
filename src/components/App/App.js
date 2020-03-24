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
            gameInProgress: false
        };
        this.setRandomCoordinate = this.setRandomCoordinate.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.playGame = this.playGame.bind(this);
    }

    async playGame() {
        const displayContainer = document.querySelector('.display-container');
        const display = document.querySelector('.display');
        display.innerHTML = '3';
        setTimeout(() => {
            display.innerHTML = '2';
        }, 750);
        setTimeout(() => {
            display.innerHTML = '1';
        }, 1500);
        setTimeout(() => {
            display.innerHTML = 'Go!';
        }, 2250);
        this.setState({gameInProgress: true});
        setTimeout(() => {
            this.setState({gameInProgress: false});
        }, 3000);
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
        this.setRandomCoordinate();
    }

    componentDidMount() {
        this.setRandomCoordinate();
    }

    render() {
        return (
            <div className="app-container">
                <Grid handleSquareClick={this.handleSquareClick}/>
                <Sidebar playGame={this.playGame}/>
            </div>
        );
    }
}

export default App;