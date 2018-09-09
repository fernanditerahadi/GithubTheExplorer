import Redux from 'redux'

import {
    UPDATE_QUERY,
    UPDATE_LIST
} from './../actions/action'

let initialState = {
    query: '',
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return { ...state, query: action.query }
        case UPDATE_LIST:
            return { ...state, users: action.users}
        default:
            return state
    }
}

export default reducer