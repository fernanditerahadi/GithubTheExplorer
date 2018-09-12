import React, { Component } from 'react'
import { Link} from 'react-router-dom'


import { Media } from 'reactstrap';
import './User.css'

class User extends Component {
    render() {
        let url = 'https://www.github.com/' + this.props.user.login;
        let img = this.props.user.avatar_url;

        return (
            <div>
                <Link to={`/${this.props.user.login}`}>
                    <Media className="User">
                        <Media left>
                            <img className="User-image" src={img} alt="github-explorer"></img>
                        </Media>
                        <Media body className="User-name-container">
                            <Media heading className="User-name">
                                {this.props.user.login}
                            </Media>
                            {url}
                        </Media>
                    </Media>
                </Link>
                <hr></hr>
            </div>

        )

    }
}

export default User
