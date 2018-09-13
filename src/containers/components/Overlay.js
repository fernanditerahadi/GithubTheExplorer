import React, { Component } from 'react';

import ic_empty_state from './../../assets/ic_empty_state.png'
import ic_not_found from './../../assets/ic_not_found.png'
import ic_blank from './../../assets/ic_blank.png'

import './Overlay.css'

const NO_RESULTS_FOUND = 'No Results Found...'
const BEGIN_SEARCH = 'Begin Search...'

class Overlay extends Component {
    getOverlayBackground = () => {
        const { query, array } = this.props
        if (query) {
            return array.length >= 1 ? {
                icon: ic_blank,
                text: null
            } : {
                    icon: ic_not_found,
                    text: NO_RESULTS_FOUND
                }
        } else {
            return {
                icon: ic_empty_state,
                text: BEGIN_SEARCH
            }
        }
    }

    render() {
        const overLayBackground = this.getOverlayBackground()
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
                            src={overLayBackground.icon}
                            alt="github-explorer" />

                        <h4 className="empty-state-text">
                            {overLayBackground.text}
                        </h4>
                    </div>}
            </div>
        )
    }
}

export default Overlay