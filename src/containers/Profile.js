import React, { Component } from 'react'

import _ from 'lodash'

import Navigation from './components/Navigation'
import List from './components/List'
import Card from './components/Card'

import { Row, Col, Grid } from 'react-bootstrap'

import './Profile.css'


class Profile extends Component {
    render() {

        let repos = _.range(1).map((user, index) => {
            return (<p>repo</p>)
        });

        let followers = _.range(10).map((user, index) => {
            return (<p>follower</p>)
        });

        let following = _.range(100).map((user, index) => {
            return (<p>following</p>)
        });
        return (
            <div className="Profile">
                <Navigation />
                <Grid className="Profile-container">
                    <Row>
                        <Col sm={12} md={3}>
                            <Card />
                        </Col>
                        <Col sm={12} md={3}>
                            <List title="Repos" repo={repos} />
                        </Col>
                        <Col sm={12} md={3}>
                            <List title="Followers" repo={followers} />
                        </Col>
                        <Col sm={12} md={3}>
                            <List title="Following" repo={following} />
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}

export default Profile
