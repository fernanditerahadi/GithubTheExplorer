import React, { Component } from 'react';

import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { Button, Icon } from 'antd'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" light>
                    <NavbarBrand href="/" className="mr-auto">
                        <Button type="primary">
                            <Icon type="home" />
                        </Button>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Navigation