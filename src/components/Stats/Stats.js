import React from 'react';
import './Stats.css';

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    formatTime(seconds) {
        if(seconds < 0)
            seconds = 0;
        if(seconds < 10)
            return `0:0${seconds}`;
        else
            return `0:${seconds}`;
    }

    formatCoordinateList(coords) {
        return coords.map(arr => arr[1] ?
        (<div className="coords-result correct">
            <div className="box correct-box"></div>
            <div>{arr[0]}</div>
        </div>):
        (<div className="coords-result incorrect">
            <div className="box incorrect-box"></div>
            <div>{arr[0]}</div>
        </div>));
    }

    render() {
        return (
            <div
                className={`stats ${this.props.gameInProgress ? 'round-borders' : ''}`}
            >
                {this.props.gameInProgress ?
                [<div>
                    <div className="stats-header">
                        <div className={`stats-square ${this.props.gridColor === 'white' ? 'white' : 'black'}`}>
                            {this.props.coordinate}
                        </div>
                    </div>
                    <div className="stats-row">
                        <div className="icon"></div>
                        <div className="successes">{this.props.successes}</div>
                        <div className="successes time">{this.formatTime(this.props.secondsLeft)}</div>
                    </div>
                    <div className="coords-list">{this.formatCoordinateList(this.props.coordinateList)}</div>
                </div>] : !this.props.beforeInitialGame ? [<div>
                    <div className="stats-row">
                        <div className="icon"></div>
                        <div className="successes">{this.props.successes}</div>
                        <div className="successes time">{this.formatTime(this.props.secondsLeft)}</div>
                    </div>
                    <div className="coords-list">{this.formatCoordinateList(this.props.coordinateList)}</div>
                </div>] :
                [<div className="icon centered"></div>] }
            </div>
        );
    }
}

export default Stats;