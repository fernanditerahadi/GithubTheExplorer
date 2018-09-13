import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { Media } from 'reactstrap';
import './User.css'

class User extends Component {
    render() {
        let url = 'https://www.github.com/' + this.props.login;

        return (
            <div>
                <Link to={this.props.to}>
                    <Media className="User">
                    <Media left>
                        <img className="User-image" src={this.props.avatar_url} alt="github-explorer"></img>
                    </Media>
                    <Media body className="User-name-container">
                        <Media heading className="User-name">
                            {this.props.login}
                        </Media>
                        {url}
                    </Media>
                </Media>
                </Link>
            <hr></hr>
            </div >

        )

    }
}

export default User
