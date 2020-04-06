import React from 'react';
import Options from '../Options/Options.js';
import Stats from '../Stats/Stats.js';
import './Sidebar.css';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <h1 style={props.gameInProgress ? {display: 'none', borderRadius: 'var(--sidebar-border-radius)'} : {}}>Vision</h1>
            <Stats
                coordinate={props.coordinate}
                gameInProgress={props.gameInProgress}
                gridColor={props.gridColor}
                successes={props.successes}
                secondsLeft={props.secondsLeft}
                coordinateList={props.coordinateList}
                beforeInitialGame={props.beforeInitialGame}
            />
            <Options
                playGame={props.playGame}
                gameInProgress={props.gameInProgress}
                toggleShowCoordinates={props.toggleShowCoordinates}
                toggleGridColor={props.toggleGridColor}
            />
        </div>
    );
}

export default Sidebar;