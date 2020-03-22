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
            coordinate: ''
        };
        this.setRandomCoordinate = this.setRandomCoordinate.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    setRandomCoordinate() {
        const randomFile = String.fromCharCode(97 + Math.floor(Math.random() * 8));
        const randomRow = Math.floor(Math.random() * 8) + 1;
        this.setState({
            coordinate: randomFile + randomRow
        });
    }

    handleSquareClick(event, file, row) {
        const current = event.target;
        if(file === this.state.coordinate.charAt(0) &&
            row === this.state.coordinate.charAt(1)) {
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
            });
            current.classList.add('red-glow');
            setTimeout(() => {current.classList.remove('red-glow')}, 150);
        }
        this.setRandomCoordinate();
    }

    componentDidMount() {
        this.setRandomCoordinate();
    }

    render() {
        return (
            <div className="app-container">
                <div className="coordinate">{this.state.coordinate}</div>
                <Grid handleSquareClick={this.handleSquareClick}/>
                <Sidebar/>
            </div>
        );
    }
}

export default App;