import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import './App.css'
import logo from './../assets/logo.svg'

import { Pagination } from 'antd';

import Item from './components/Item'
import Search from './components/Search'
import Overlay from './components/Overlay'
import { queryUsers, fetchUsers, clearUsers, storeState } from '../actions/App'

const perPage = 30

class App extends Component {

    scrollTo = (posX, posY) => {
        document.getElementById('Users-container').scrollTo(posX, posY)
    }

    resetScrollPosition = () => {
        const scrollPosition = { x: 0, y: 0 }
        this.scrollTo(scrollPosition.x, scrollPosition.y)
        return scrollPosition.y
    }

    restoreScrollPosition = () => {
        this.scrollTo(0, this.props.scrollPosition)
        return this.props.scrollPosition
    }

    onClear = () => {
        this.props.clearUsers()
        this.props.storeState(null, 1, 0)
    }

    onHandleChange = (e) => {
        const scrollPosition = this.resetScrollPosition()
        this.props.onTextChange(queryUsers((e.target.value)))
        this.props.storeState(e.target.value, 1, scrollPosition)
    }

    onPageChange = (page) => {
        const scrollPosition = this.resetScrollPosition()
        this.props.fetchUsers(this.props.query, page)
        this.props.storeState(this.props.searchText, page, scrollPosition)
    }

    componentDidMount() {
        const scrollPosition = this.restoreScrollPosition()
        this.props.storeState(this.props.searchText, this.props.currentPage, scrollPosition)
    }

    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            if (this.props.query == null) {
                this.onClear()
            } else {
                this.props.storeState(this.props.query, 1, 0)
                this.props.fetchUsers(this.props.query)
            }
        }
    }

    componentWillUnmount() {
        const scrollPosition = document.getElementById('Users-container').scrollTop
        this.props.storeState(this.props.searchText, this.props.currentPage, scrollPosition)
    }


    render() {
        const pages = this.props.totalCount > 1000 ? 1000 : this.props.totalCount

        let users = (this.props.users ? this.props.users.map((user, index) => {
            let startCount = 0;
            if (startCount < perPage) {
                startCount++
                return (< Item key={index} to={`/${user.login}`} body={user.html_url} heading={user.login} image={user.avatar_url} />)
            }
        }) : []);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="github-explorer" />
                    <h1 className="App-title">Github Explorer</h1>
                </header>
                <div className="App-input">
                    <Search
                        onChange={(e => this.onHandleChange(e))}
                        onClick={() => this.onClear()}
                        value={this.props.searchText}
                        buttonName="Clear" />
                    <hr />
                    <div id="Users-container" className="Users-container">
                        {users}
                        <Overlay
                            isFetching={this.props.isFetching}
                            query={this.props.query}
                            array={this.props.users} />

                    </div>
                    <hr />
                    <Pagination
                        total={pages ? pages : 1}
                        pageSize={perPage}
                        defaultCurrent={1}
                        current={this.props.currentPage}
                        onChange={(page) => this.onPageChange(page)}
                        showTotal={(total, range) => pages ? `${range[0]}-${range[1]} of ${total} items` : `0 items`}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        query: state.appReducer.query.query,
        users: state.appReducer.users.users,
        totalCount: state.appReducer.users.totalCount,
        isFetching: state.appReducer.users.isFetching,
        currentPage: state.appReducer.store.currentPage,
        searchText: state.appReducer.store.searchText,
        scrollPosition: state.appReducer.store.scrollPosition
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearUsers: () => dispatch(clearUsers()),
        storeState: (searchText, currentPage, scrollPosition) => dispatch(storeState(searchText, currentPage, scrollPosition)),
        fetchUsers: (query, page = 1) => dispatch(fetchUsers(query, page)),
        onTextChange: _.debounce(dispatch, 500)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)