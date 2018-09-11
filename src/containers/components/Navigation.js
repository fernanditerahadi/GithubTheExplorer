import React, { Component } from 'react';

import { Menu, Icon } from 'antd';

import './Navigation.css'

class Search extends Component {
    render() {
        return (
            <div>
                <Menu
                    className="Navigation"
                    theme="dark"
                    mode="inline">
                    <Menu.Item key="mail">
                        <Icon type="home" />Home</Menu.Item>
                </Menu>
            </div >
        )
    }
}

export default Search