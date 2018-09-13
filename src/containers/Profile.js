import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import './Profile.css'

import { Row, Col, Grid } from 'react-bootstrap'

import Navigation from './components/Navigation'
import List from './components/List'
import Card from './components/Card'
import { fetchProfile } from '../actions/Profile'

class Profile extends Component {

    componentDidMount() {
        const query = this.props.location.pathname.replace(/\//g, "")
        const { dispatch } = this.props
        dispatch(fetchProfile(query))
    }

    render() {

        let repos = _.range(10).map((user, index) => {
            return (<p>repo</p>)
        });

        let followers = _.range(10).map((user, index) => {
            return (<p>follower</p>)
        });

        let following = _.range(10).map((user, index) => {
            return (<p>following</p>)
        });
        return (
            <div className="Profile">
                <Navigation />
                <Grid className="Profile-container">
                    <Row>
                        <Col sm={12} md={3}>
                            <Card {...this.props.profile} />
                        </Col>
                        <Col sm={12} md={3}>
                            <List title="Repos" count={this.props.profile.public_repos} item={repos} />
                        </Col>
                        <Col sm={12} md={3}>
                            <List title="Followers" count={this.props.profile.followers} item={followers} />
                        </Col>
                        <Col sm={12} md={3}>
                            <List title="Following" count={this.props.profile.following} item={following} />
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.profileReducer.isFetching,
        profile: state.profileReducer.profile
    }
}

export default connect(mapStateToProps)(Profile)
