import fetch from 'cross-fetch'

import _ from 'lodash'

export const QUERY_PROFILE = 'QUERY_PROFILE'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

const API_URL = 'https://api.github.com/users/'


function requestProfile(input) {
    return {
        type: REQUEST_PROFILE,
        input
    }
}

function receiveProfile(json) {
    return {
        type: RECEIVE_PROFILE,
        profile: json
    }
}

export function fetchProfile(input) {
    return dispatch => {
        dispatch(requestProfile(input))
        return fetch(API_URL + input)
            .then(response => response.json())
            .then(json => dispatch(receiveProfile(json)))
    }
}
