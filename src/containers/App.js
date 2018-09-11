import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import './App.css'
import logo from './../assets/logo.svg'

import { Pagination } from 'antd';


import User from './components/User'
import Search from './components/Search'
import Overlay from './components/Overlay'
import { queryUsers, fetchUsers, fetchPage, clearUsers } from './../actions/action'

class App extends Component {
    state = {
        currentPage: 1
    }

    onTextChange = _.debounce(this.props.dispatch, 500)

    onClear = () => {
        const { dispatch } = this.props
        dispatch(clearUsers())
        this.setState({ currentPage: 1 })
    }

    onHandleChange = (e) => {
        this.onTextChange(queryUsers(e.target.value))
    }

    onPageChange = (page) => {
        const { dispatch, input } = this.props
        fetchPage(dispatch, input, page)
        this.setState({ currentPage: page })
    }

    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            const { dispatch, query } = this.props
            if (query !== '') {
                dispatch(fetchUsers(query))
                this.setState({ currentPage: 1 })
            }
        }
    }

    render() {
        const perPage = 30
        const pages = this.props.totalCount > 1000 ? 1000 : this.props.totalCount

        let users = this.props.users.map((user, index) => {
            let startCount = 0;
            if (startCount < perPage) {
                startCount++
                return (< User key={index} user={user} />)
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
                        buttonName="Clear" />
                    <hr />
                    <div className="Users-container">
                        <Overlay 
                        isFetching={this.props.isFetching}
                        query={this.props.query}
                        array={this.props.users} />
                        {users}
                    </div>
                    <hr />
                    <Pagination
                        total={pages ? pages : 1}
                        pageSize={perPage}
                        current={this.state.currentPage}
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
        query: state.query.query,
        input: state.users.input,
        users: state.users.users,
        totalCount: state.users.totalCount,
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps)(App)