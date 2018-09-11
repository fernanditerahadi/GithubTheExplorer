import React, { Component } from 'react';

import ic_empty_state from './../../assets/ic_empty_state.png'
import ic_not_found from './../../assets/ic_not_found.png'
import ic_blank from './../../assets/ic_blank.png'

import './Overlay.css'


class Overlay extends Component {
    render() {
        const NO_RESULTS_FOUND = 'No Results Found...'
        const BEGIN_SEARCH = 'Begin Search...'

        return (
            <div>
                {this.props.isFetching ?
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                    :
                    <div className="empty-state">
                        <img className="empty-state-image"
                            src={this.props.query === '' ? ic_empty_state : this.props.array.length < 1 ? ic_not_found : ic_blank}
                            alt="github-explorer" />

                        <h4 className="empty-state-text">
                            {this.props.query === '' ? BEGIN_SEARCH : this.props.array.length < 1 ? NO_RESULTS_FOUND : ""}
                        </h4>
                    </div>}
            </div>
        )
    }
}

export default Overlay