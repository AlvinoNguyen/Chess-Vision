import React from 'react';
import './Stats.css';

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div
                className={`stats ${this.props.gameInProgress ? 'round-borders' : ''}`}
            >
                {this.props.gameInProgress ?
                [<div>
                    <div class="stats-header">
                        <div className='square'>{this.props.coordinate}</div>
                    </div>
                </div>] :
                [<div className="icon"></div>] }
            </div>
        );
    }
}

export default Stats;