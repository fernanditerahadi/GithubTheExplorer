export const QUERY_USERS = 'QUERY_USERS'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CLEAR_USERS = 'CLEAR_USERS'
export const STORE_STATE = 'STORE_STATE'
export const STORE_SCROLL = 'STORE_SCROLL'

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

function receiveUsers(json) {
    return {
        type: RECEIVE_USERS,
        users: json.items,
        totalCount: json.total_count
    }
}

export function fetchUsers(input, page = 1) {
    return (dispatch) => {
        dispatch(requestUsers(input))
        return fetch(API_URL + input + QUERY_PAGE + page)
            .then((response) => { return response.json() })
            .then((json) => dispatch(receiveUsers(json)))
    }
}

export function clearUsers() {
    return {
        type: CLEAR_USERS
    }
}

export function storeState(searchText, currentPage) {
    return {
        type: STORE_STATE,
        searchText,
        currentPage
    }
}

export function storeScroll(scrollPosition) {
    return {
        type: STORE_SCROLL,
        scrollPosition
    }
}