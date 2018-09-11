import React, { Component } from 'react';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'

class Search extends Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username"
                        onChange={this.props.onChange}
                        value={this.props.value} />
                    <Button outline color="primary"
                        onClick={this.props.onClick}
                    >{this.props.buttonName}</Button>
                </InputGroup>
            </div>
        )
    }
}

export default Search