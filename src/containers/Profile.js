import React, { Component } from 'react';

import Navigation from './components/Navigation'
import Card from './components/Card'

import { Row, Col, Grid } from 'react-bootstrap';

import './Profile.css'


class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <Navigation />
                <Grid className="Profile-container">
                    <Row>
                        <Col sm={12} md={3}>
                            <Card />
                        </Col>
                        <Col sm={12} md={3}>
                            <h4>Repos</h4>
                            <hr></hr>
                        </Col>
                        <Col sm={12} md={3}>
                            <h4>Followers</h4>
                            <hr></hr>
                        </Col>
                        <Col sm={12} md={3}>
                            <h4>Following</h4>
                            <hr></hr>
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}

export default Profile
