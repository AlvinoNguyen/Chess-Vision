import React from 'react';
import './Options.css';

class Options extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="options">
                <div className="color">
                    <label htmlFor="color">Color</label>
                    <select name="color">
                        <option>White</option>
                        <option>Black</option>
                        <option>White or Black</option>
                    </select>
                </div>
                <div className="show-coordinates">
                    <input type="checkbox" name="show-coordinates" value="show-coordinates"/>
                    <div>Show Coordinates</div>
                </div>
                <button className="start-button">Start</button>
            </div>
        );
    }
}

export default Options;