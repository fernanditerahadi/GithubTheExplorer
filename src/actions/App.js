export const QUERY_USERS = 'QUERY_USERS'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CLEAR_USERS = 'CLEAR_USERS'

const API_URL = 'https://api.github.com/search/users?q='
const QUERY_PAGE = '&page='

export function queryUsers(query) {
    return {
        type: QUERY_USERS,
        query
    }
}

function requestUsers(input) {
    return {
        type: REQUEST_USERS,
        input
    }
}

function receiveUsers(input, json) {
    return {
        type: RECEIVE_USERS,
        input,
        users: json.items,
        totalCount: json.total_count
    }
}

export function fetchUsers(input, page = 1) {
    return (dispatch) => {
        dispatch(requestUsers(input))
        return dispatch(fetchPage(input, page))
    }
}

export function fetchPage(input, page) {
    return dispatch => {
        return fetch(API_URL + input + QUERY_PAGE + page)
            .then((response) => { return response.json() })
            .then((json) => dispatch(receiveUsers(input, json)))

    }
}

export function clearUsers() {
    return {
        type: CLEAR_USERS
    }
}
