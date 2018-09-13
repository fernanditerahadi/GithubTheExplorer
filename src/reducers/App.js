import { combineReducers } from 'redux'
import {
    QUERY_USERS,
    REQUEST_USERS,
    RECEIVE_USERS,
    CLEAR_USERS,
    STORE_STATE,
    STORE_SCROLL
} from '../actions/App'


const initialQueryState = {
    query: ''
}

const query = (state = initialQueryState, action) => {
    switch (action.type) {
        case QUERY_USERS:
            return { query: action.query }
        case CLEAR_USERS:
            return { query: '' }
        default:
            return state
    }
}

const initialUsersState = {
    users: [],
    totalCount: 0,
    isFetching: false
}

const users = (state = initialUsersState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return { ...state, isFetching: true }
        case RECEIVE_USERS:
            return { ...state, users: action.users, totalCount: action.totalCount, isFetching: false }
        case CLEAR_USERS:
            return { ...state, users: [], totalCount: 0 }
        default:
            return state
    }
}

const initialStoreState = {
    currentPage: 1,
    searchText: '',
    scrollPosition: 0
}

const store = (state = initialStoreState, action) => {
    switch (action.type) {
        case STORE_STATE:
            return { ...state, currentPage: action.currentPage, searchText: action.searchText }
        case STORE_SCROLL:
            return { ...state, scrollPosition: action.scrollPosition }
        default:
            return state
    }
}

const appReducer = combineReducers({
    query,
    users,
    store
})

export default appReducer