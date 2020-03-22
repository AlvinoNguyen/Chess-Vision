import React from 'react';
import Options from '../Options/Options.js';
import './Sidebar.css';

class Sidebar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sidebar">
                <h1>Vision</h1>
                <div className="blank"></div>
                <Options/>
            </div>
        )
    }
}

export default Sidebar;