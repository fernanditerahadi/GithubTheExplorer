import {
    REQUEST_PROFILE,
    RECEIVE_PROFILE
} from './../actions/Profile'


const initialProfileState = {
    isFetching: false,
    profile: {}
}

const profile = (state = initialProfileState, action) => {
    switch (action.type) {
        case REQUEST_PROFILE:
            return { ...state, isFetching: true }
        case RECEIVE_PROFILE:
            return { ...state, isFetching: false, profile: action.profile }
        default:
            return state
    }

}

export default profile