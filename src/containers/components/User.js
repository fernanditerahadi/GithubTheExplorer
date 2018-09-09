import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './User.css'

class User extends Component {
    render() {
        let url = 'https://www.github.com/' + this.props.user.login;
        let img = this.props.user.avatar_url;
        console.log(img);


        return (
            <div>

                <Media>
                    <Media left className="User-image-container">
                        <img className="User-image" src={img} alt="github-explorer"></img>
                    </Media>
                    <Media body className="User-name-container">
                        <Media heading className="User-name">
                            {this.props.user.login}
                        </Media>
                        {url}
                    </Media>
                </Media>
                <hr></hr>
            </div>

        )

    }
}

export default User
