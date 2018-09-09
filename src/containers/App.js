import React, { Component } from 'react'
import logo from './../assets/logo.svg'
import './App.css'

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import User from './components/User'


import { connect } from 'react-redux'
import { UPDATE_QUERY, fetchUsers } from './../actions/action'

class App extends Component {

    onHandleChange = (e) => {
        let { dispatch } = this.props
        dispatch({ type: UPDATE_QUERY, query: e.target.value })
    }

    onUserSearch = () => {
        let { dispatch } = this.props;
        let { query } = this.props;
        fetchUsers(query, dispatch)
    }

    render() {
        let users = this.props.users.slice(0, 14).map((user, index) => { return <User key={index} user={user} /> });
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Github Explorer</h1>
                </header>
                <div className="App-input">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                        <Input placeholder="username"
                            onChange={(e) => this.onHandleChange(e)}
                            value={this.props.query} />
                        <Button outline color="primary"
                            onClick={() => this.onUserSearch()}
                        >Search</Button>
                    </InputGroup>
                    <hr />
                    {users}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        query: state.query,
        users: state.users
    }
}

export default connect(mapStateToProps)(App)