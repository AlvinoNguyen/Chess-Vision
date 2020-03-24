import React from 'react';
import Options from '../Options/Options.js';
import './Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <h1>Vision</h1>
                <div className="blank"></div>
                <Options playGame={this.props.playGame}/>
            </div>
        )
    }
}

export default Sidebar;