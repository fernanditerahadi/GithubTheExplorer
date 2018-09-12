import React, { Component } from 'react';

import { Icon } from 'antd'


import './Card.css'

class Navigation extends Component {
    render() {

        return (
            <div className="Card">
                <img src="https://avatars1.githubusercontent.com/u/150330?v=4" className="Card-image" />
                <h2 className="Card-name">Kyle Simpson</h2>
                <p className="Card-id">getify</p>
                <p className="Card-bio">I teach JavaScript and I'd love to come help your team's developers.
                If that's interesting to you, please reach out to me getify@gmail.com.</p>
                <hr></hr>
                <div className="Card-detail-container">
                    <p className="Card-detail"><Icon type="team" theme="outlined" />&nbsp;Getify Solutions</p>
                    <p className="Card-detail"><Icon type="environment" theme="outlined"  />&nbsp;Austin, TX</p>
                    <p className="Card-detail"><Icon type="mail" theme="outlined"  />
                        <a href="mailto:getify@gmail.com">&nbsp;getify@gmail.com</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Navigation