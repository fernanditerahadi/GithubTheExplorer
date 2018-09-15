import { combineReducers } from 'redux'
import {
    REQUEST_PROFILE,
    RECEIVE_PROFILE,
    REQUEST_REPOS,
    RECEIVE_REPOS,
    REQUEST_FOLLOWERS,
    RECEIVE_FOLLOWERS,
    REQUEST_FOLLOWINGS,
    RECEIVE_FOLLOWINGS
} from './../actions/Profile'


const initialProfileState = {
    isFetching: false,
    query: null,
    profile: {}
}

const profile = (state = initialProfileState, action) => {
    switch (action.type) {
        case REQUEST_PROFILE:
            return { ...state, isFetching: true, query: action.query }
        case RECEIVE_PROFILE:
            return { ...state, isFetching: false, profile: action.json }
        default:
            return state
    }
}

const initialReposState = {
    isFetching: false,
    repos: [],
    page: 1
}

const repos = (state = initialReposState, action) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return { ...state, isFetching: true, page: action.page }
        case RECEIVE_REPOS:
            return { ...state, isFetching: false, repos: action.json }
        default:
            return state
    }
}

const initialFollowersState = {
    isFetching: false,
    followers: [],
    page: 1
}

const followers = (state = initialFollowersState, action) => {
    switch (action.type) {
        case REQUEST_FOLLOWERS:
            return { ...state, isFetching: true, page: action.page }
        case RECEIVE_FOLLOWERS:
            return { ...state, isFetching: false, followers: action.json }
        default:
            return state
    }
}

const initialFollowingsState = {
    isFetching: false,
    followings: [],
    page: 1
}

const followings = (state = initialFollowingsState, action) => {
    switch (action.type) {
        case REQUEST_FOLLOWINGS:
            return { ...state, isFetching: true, page: action.page }
        case RECEIVE_FOLLOWINGS:
            return { ...state, isFetching: false, followings: action.json }
        default:
            return state
    }
}

const profileReducer = combineReducers({
    profile,
    repos,
    followers,
    followings
})

export default profileReducer