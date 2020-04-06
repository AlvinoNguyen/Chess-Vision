import React from 'react';
import './Options.css';

function Options(props) {
    return (
        <div className="options" style={props.gameInProgress ? {display: 'none'} : {}}>
            <div className="color">
                <label htmlFor="color">Color</label>
                <select name="color" onChange={props.toggleGridColor}>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="random">White or Black</option>
                </select>
            </div>
            <div className="show-coordinates">
                <input
                    type="checkbox"
                    name="show-coordinates"
                    value="show-coordinates"
                    onChange={props.toggleShowCoordinates}
                    defaultChecked
                />
                <label htmlFor="show-coordinates">Show Coordinates</label>
            </div>
            <button className="start-button" onClick={props.playGame}>Start</button>
        </div>
    );
}

export default Options;