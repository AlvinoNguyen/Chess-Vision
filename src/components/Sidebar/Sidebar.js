import React from 'react';
import Options from '../Options/Options.js';
import Stats from '../Stats/Stats.js';
import './Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <h1 style={this.props.gameInProgress ? {display: 'none', borderRadius: 'var(--sidebar-border-radius)'} : {}}>Vision</h1>
                <Stats
                    coordinate={this.props.coordinate}
                    gameInProgress={this.props.gameInProgress}
                    gridColor={this.props.gridColor}
                    successes={this.props.successes}
                    secondsLeft={this.props.secondsLeft}
                    coordinateList={this.props.coordinateList}
                    beforeInitialGame={this.props.beforeInitialGame}
                />
                <Options
                    playGame={this.props.playGame}
                    gameInProgress={this.props.gameInProgress}
                    toggleShowCoordinates={this.props.toggleShowCoordinates}
                    toggleGridColor={this.props.toggleGridColor}
                />
            </div>
        )
    }
}

export default Sidebar;