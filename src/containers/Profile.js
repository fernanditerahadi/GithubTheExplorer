import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import './Profile.css'

import { Row, Col, Grid } from 'react-bootstrap'

import Navigation from './components/Navigation'
import List from './components/List'
import Card from './components/Card'
import Item from './components/Item'
import Loading from './components/Loading'
import {
    REQUEST_PROFILE,
    RECEIVE_PROFILE,
    REQUEST_REPOS,
    RECEIVE_REPOS,
    REQUEST_FOLLOWERS,
    RECEIVE_FOLLOWERS,
    REQUEST_FOLLOWINGS,
    RECEIVE_FOLLOWINGS,
    fetchData
} from '../actions/Profile'


const perPage = 30

class Profile extends Component {

    onReposPageChange = (page) => {
        this.props.fetchData(REQUEST_REPOS, RECEIVE_REPOS, this.props.query, page)
    }

    onFollowersPageChange = (page) => {
        this.props.fetchData(REQUEST_FOLLOWERS, RECEIVE_FOLLOWERS, this.props.query, page)
    }

    onFollowingsPageChange = (page) => {
        this.props.fetchData(REQUEST_FOLLOWINGS, RECEIVE_FOLLOWINGS, this.props.query, page)
    }

    componentDidMount() {
        const query = this.props.location.pathname.replace(/\//g, "")
        this.props.fetchData(REQUEST_PROFILE, RECEIVE_PROFILE, query)
    }

    componentDidUpdate(prevProps) {
        if (this.props.query && this.props.query !== prevProps.query) {
            this.props.fetchData(REQUEST_REPOS, RECEIVE_REPOS, this.props.query)
            this.props.fetchData(REQUEST_FOLLOWERS, RECEIVE_FOLLOWERS, this.props.query)
            this.props.fetchData(REQUEST_FOLLOWINGS, RECEIVE_FOLLOWINGS, this.props.query)
        }
    }

    render() {

        let repos = (this.props.reposEntity.repos ? this.props.reposEntity.repos.map((repo, index) => {
            let startCount = 0;
            if (startCount < perPage) {
                startCount++
                return (< Item
                    key={index}
                    isExternal
                    to={repo.html_url}
                    heading={repo.name}
                    body={repo.language}
                    image={null} />)
            }
        }) : []);

        let followers = (this.props.followersEntity.followers ? this.props.followersEntity.followers.map((follower, index) => {
            let startCount = 0;
            if (startCount < perPage) {
                startCount++
                return (< Item
                    key={index}
                    isExternal
                    to={follower.html_url}
                    heading={follower.login}
                    body={follower.html_url}
                    image={follower.avatar_url} />)
            }
        }) : []);

        let followings = (this.props.followingsEntity.followings ? this.props.followingsEntity.followings.map((following, index) => {
            let startCount = 0;
            if (startCount < perPage) {
                startCount++
                return (< Item
                    key={index}
                    isExternal
                    to={following.html_url}
                    heading={following.login}
                    body={following.html_url}
                    image={following.avatar_url}
                />)
            }
        }) : []);

        return (
            <div className="Profile">
                <Navigation />
                <Grid className="Profile-container">
                    <Row>
                        <Col sm={12} md={3} className="Profile-col">
                            <Card {...this.props.profileEntity.profile} isFetching={this.props.profileEntity.isFetching} />
                        </Col>
                        <Col sm={12} md={3} className="Profile-col">
                            <List title="Repos"
                                item={repos}
                                isFetching={this.props.reposEntity.isFetching}
                                count={this.props.profileEntity.profile.public_repos}
                                currentPage={this.props.reposEntity.page}
                                onChange={(page) => this.onReposPageChange(page)} />

                        </Col>
                        <Col sm={12} md={3} className="Profile-col">
                            <List title="Followers"
                                item={followers}
                                isFetching={this.props.followersEntity.isFetching}
                                count={this.props.profileEntity.profile.followers}
                                currentPage={this.props.followersEntity.page}
                                onChange={(page) => this.onFollowersPageChange(page)} />
                        </Col>
                        <Col sm={12} md={3} className="Profile-col">
                            <List
                                title="Following"
                                isFetching={this.props.followingsEntity.isFetching}
                                item={followings}
                                count={this.props.profileEntity.profile.following}
                                currentPage={this.props.followingsEntity.page}
                                onChange={(page) => this.onFollowingsPageChange(page)} />
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileEntity: state.profileReducer.profile,
        reposEntity: state.profileReducer.repos,
        followersEntity: state.profileReducer.followers,
        followingsEntity: state.profileReducer.followings,
        query: state.profileReducer.profile.query,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (actionOne, actionTwo, query, page = 1) => dispatch(fetchData(actionOne, actionTwo, query, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
