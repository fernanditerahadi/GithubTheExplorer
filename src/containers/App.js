import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import './App.css'
import logo from './../assets/logo.svg'

import { Pagination } from 'antd';

import User from './components/User'
import Search from './components/Search'
import Overlay from './components/Overlay'
import { queryUsers, fetchUsers, clearUsers, storeState, storeScroll } from '../actions/App'

class App extends Component {

    onClear = () => {
        this.props.clearUsers()
        this.props.storeState('', 1)
    }

    onHandleChange = (e) => {
        this.props.onTextChange(queryUsers((e.target.value)))
        this.props.storeState(e.target.value, 1)
        this.props.storeScroll(document.getElementById('Users-container').scrollTo(0, 0))
    }

    onPageChange = (page) => {
        this.props.fetchUsers(this.props.query, page)
        this.props.storeState(this.props.query, page)
    }

    componentDidMount() {
        this.props.storeScroll(document.getElementById('Users-container').scrollTo(0, this.props.scrollPosition))
    }

    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            if (this.props.query == '') {
                this.onClear()
            } else {
                this.props.storeState(this.props.query, 1)
                this.props.fetchUsers(this.props.query)
            }
        }
    }

    componentWillUnmount() {
        this.props.storeScroll(document.getElementById('Users-container').scrollTop)
    }


    render() {
        const perPage = 30
        const pages = this.props.totalCount > 1000 ? 1000 : this.props.totalCount

        let users = this.props.users.map((user, index) => {
            let startCount = 0;
            if (startCount < perPage) {
                startCount++
                return (< User key={index} to={`/${user.login}`} {...user} />)
            }
        });

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
        storeState: (searchText, currentPage) => dispatch(storeState(searchText, currentPage)),
        fetchUsers: (query, page = 1) => dispatch(fetchUsers(query, page)),
        storeScroll: (scrollPosition) => dispatch(storeScroll(scrollPosition)),
        onTextChange: _.debounce(dispatch, 500)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)