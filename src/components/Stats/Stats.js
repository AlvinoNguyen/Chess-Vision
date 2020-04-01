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

    render() {
        return (
            <div
                className={`stats ${this.props.gameInProgress ? 'round-borders' : ''}`}
            >
                {this.props.gameInProgress ?
                [<div>
                    <div class="stats-header">
                        <div class={`stats-square ${this.props.gridColor === 'white' ? 'white' : 'black'}`}>
                            {this.props.coordinate}
                        </div>
                    </div>
                    <div className="stats-row">
                        <div className="icon"></div>
                        <div className="successes">{this.props.successes}</div>
                        <div className="successes time">{this.formatTime(this.props.secondsLeft)}</div>
                    </div>
                </div>] :
                [<div className="icon centered"></div>] }
            </div>
        );
    }
}

export default Stats;