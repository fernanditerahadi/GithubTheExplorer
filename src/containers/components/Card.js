import React, { Component } from 'react';

import { Image } from 'react-bootstrap'


import './Card.css'

class Navigation extends Component {
    render() {

        return (
            <div className="Card">
                <img src="https://avatars2.githubusercontent.com/u/39233193?v=4" className="Card-image" />
                <h2 className="Card-name">Fernandi</h2>
                <p className="Card-id">fernanditerahadi</p>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Navigation