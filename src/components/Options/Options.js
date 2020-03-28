import React from 'react';
import './Options.css';

class Options extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="options" style={this.props.gameInProgress ? {display: 'none'} : {}}>
                <div className="color">
                    <label htmlFor="color">Color</label>
                    <select name="color">
                        <option>White</option>
                        <option>Black</option>
                        <option>White or Black</option>
                    </select>
                </div>
                <div className="show-coordinates">
                    <input
                        type="checkbox"
                        name="show-coordinates"
                        value="show-coordinates"
                        onChange={this.props.toggleShowCoordinates}
                        defaultChecked
                    />
                    <div>Show Coordinates</div>
                </div>
                <button className="start-button" onClick={this.props.playGame}>Start</button>
            </div>
        );
    }
}

export default Options;