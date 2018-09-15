import fetch from 'cross-fetch'

export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const REQUEST_REPOS = 'REQUEST_REPOS'
export const RECEIVE_REPOS = 'RECEIVE_REPOS'
export const REQUEST_FOLLOWERS = 'REQUEST_FOLLOWERS'
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS'
export const REQUEST_FOLLOWINGS = 'REQUEST_FOLLOWINGS'
export const RECEIVE_FOLLOWINGS = 'RECEIVE_FOLLOWINGS'

const API_URL = 'https://api.github.com/users/'
const QUERY_REPOS = '/repos'
const QUERY_FOLLOWERS = '/followers'
const QUERY_FOLLOWINGS = '/following'
const QUERY_PAGE = '?page='

function request(type, query, page) {
    return {
        type,
        query,
        page
    }
}

function receive(type, json) {
    return {
        type,
        json
    }
}

function getUrl(actionTwo, query, page) {
    switch (actionTwo) {
        case REQUEST_PROFILE:
            return API_URL + query
        case REQUEST_REPOS:
            return API_URL + query + QUERY_REPOS + QUERY_PAGE + page
        case REQUEST_FOLLOWERS:
            return API_URL + query + QUERY_FOLLOWERS + QUERY_PAGE + page
        case REQUEST_FOLLOWINGS:
            return API_URL + query + QUERY_FOLLOWINGS + QUERY_PAGE + page
    }
}

export function fetchData(actionOne, actionTwo, query, page = 1) {
    return dispatch => {
        dispatch(request(actionOne, query, page))
        const url = getUrl(actionOne, query, page)
        console.log(url)
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receive(actionTwo, json)))
    }
}




// function requestProfile(input) {
//     return {
//         type: REQUEST_PROFILE,
//         input
//     }
// }

// function receiveProfile(json) {
//     return {
//         type: RECEIVE_PROFILE,
//         profile: json
//     }
// }

// export function fetchProfile(input) {
//     return dispatch => {
//         dispatch(requestProfile(input))
//         return fetch(API_URL + input)
//             .then(response => response.json())
//             .then(json => dispatch(receiveProfile(json)))
//     }
// }

// function requestRepo(repoUrl) {
//     return {
//         type: REQUEST_REPO,
//         repoUrl
//     }
// }

// function receiveRepo(json) {
//     return {
//         type: RECEIVE_PROFILE,
//         repo: json
//     }
// }

// export function fetchRepo(repoUrl, page = 1) {
//     return dispatch => {
//         dispatch(requestRepo(repoUrl))
//         return fetch(repoUrl + QUERY_PAGE + page)
//             .then(response => response.json())
//             .then(json => dispatch(receiveRepo(json)))
//     }
// }

// function requestFollowers(followersUrl) {
//     return {
//         type: REQUEST_FOLLOWERS,
//         followersUrl
//     }
// }

// function receiveFollowers(json) {
//     return {
//         type: RECEIVE_FOLLOWERS,
//         followers: json
//     }
// }

// export function fetchFollowers(followersUrl, page = 1) {
//     return dispatch => {
//         dispatch(requestFollowers(followersUrl))
//         return fetch(followersUrl + QUERY_PAGE + page)
//             .then(response => response.json())
//             .then(json => dispatch(receiveFollowers(json)))
//     }
// }

// function requestFollowings(followingsUrl) {
//     return {
//         type: REQUEST_FOLLOWERS,
//         followingsUrl
//     }
// }

// function receiveFollowings(json) {
//     return {
//         type: RECEIVE_FOLLOWERS,
//         followers: json
//     }
// }

// export function fetchFollowings(followingsUrl, page = 1) {
//     return dispatch => {
//         dispatch(requestFollowings(followingsUrl))
//         const slicedFollowingsUrl = followingsUrl.slice(0, followingsUrl.find("following") + "following.length")
//         return fetch(slicedFollowingsUrl + QUERY_PAGE + page)
//             .then(response => response.json())
//             .then(json => dispatch(receiveFollowings(json)))
//     }
// }