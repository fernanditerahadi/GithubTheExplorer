export const UPDATE_QUERY = 'UPDATE_QUERY'
export const UPDATE_LIST = 'UPDATE_LIST'

export function fetchUsers(query, dispatch) {
    fetch('https://api.github.com/search/users?q=' + query)
        .then((response) => { return response.json() })
        .then((json) => {
            console.log(json.items)
            dispatch({ type: UPDATE_LIST, users: json.items })
        })
}

// export function fetchPosts(subreddit) {
//     return dispatch => {
//         dispatch(requestPosts(subreddit))
//         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//             .then(response => response.json())
//             .then(json => dispatch(receivePosts(subreddit, json)))
//     }
// }

// function shouldFetchPosts(state, subreddit) {
//     const posts = state.postsBySubreddit[subreddit]
//     if (!posts) {
//         return true
//     } else if (posts.isFetching) {
//         return false
//     } else {
//         return posts.didInvalidate
//     }
// }

// export function fetchPostsIfNeeded(subreddit) {
//     return (dispatch, getState) => {
//         if (shouldFetchPosts(getState(), subreddit)) {
//             return dispatch(fetchPosts(subreddit))
//         }
//     }
// }