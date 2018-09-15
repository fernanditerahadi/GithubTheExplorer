import React, { Component } from 'react'

import ic_empty_state from './../../assets/ic_empty_state.png'
import ic_not_found from './../../assets/ic_not_found.png'
import ic_blank from './../../assets/ic_blank.png'
import ic_limit from './../../assets/ic_limit.png'

import './Overlay.css'

import Loading from './Loading'

const NO_RESULTS_FOUND = 'No Results Found...'
const BEGIN_SEARCH = 'Begin Search...'
const EXCEED_LIMIT = 'Network call limit has been exceeded, \n please try again later...'

class Overlay extends Component {
    getOverlayBackground = () => {
        const { query, array } = this.props
        if (query && array) {
            return array.length >= 1 ? {
                icon: ic_blank,
                text: null
            } : {
                    icon: ic_not_found,
                    text: NO_RESULTS_FOUND
                }
        } else {
            if (query) {
                return {
                    icon: ic_limit,
                    text: EXCEED_LIMIT
                }
            } else {
                return {
                    icon: ic_empty_state,
                    text: BEGIN_SEARCH
                }
            }

        }
    }

    render() {
        const overLayBackground = this.getOverlayBackground()
        return (
            <div>
                {this.props.isFetching ?
                    <Loading />
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