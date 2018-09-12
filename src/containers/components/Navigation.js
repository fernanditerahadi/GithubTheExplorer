import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Navbar } from 'reactstrap';
import { Button, Icon } from 'antd'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" light>
                    <Link to={'/'}>
                        <Button ghost type="secondary">
                            <Icon type="left" />
                        </Button>
                    </Link>

                </Navbar>
            </div>
        );
    }
}

export default Navigation