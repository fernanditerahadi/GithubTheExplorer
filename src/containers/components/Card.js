import React, { Component } from 'react';

import { Icon } from 'antd'

import './Card.css'

class Navigation extends Component {
    render() {

        return (
            <div className="Card">
                <img src={this.props.avatar_url} className="Card-image" />
                <h2 className="Card-name">{this.props.name}</h2>
                <p className="Card-id">{this.props.login}</p>
                <p className="Card-bio">{this.props.bio}</p>
                <hr></hr>
                <div className="Card-detail-container">
                    {this.props.company &&
                        <p className="Card-detail"><Icon type="team" theme="outlined" />&nbsp;{this.props.company}</p>}

                    {this.props.location &&
                        <p className="Card-detail"><Icon type="environment" theme="outlined" />&nbsp;{this.props.location}</p>}

                    {this.props.email &&
                        <p className="Card-detail"><Icon type="mail" theme="outlined" />
                            <a href="mailto:getify@gmail.com">&nbsp;{this.props.email}</a>
                        </p>}
                </div>
            </div>
        );
    }
}
null == 0 == undefined == false
export default Navigation