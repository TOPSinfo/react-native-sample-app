import * as Actions from '../Actions/ActionTypes'

const HomeDataReducer = (state = { isLoading: false, error: null, data: [] }, action) => {

    switch (action.type) {
        case Actions.SERVICE_PENDING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.SERVICE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.SERVICE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.data
            });
        default:
            return state;
    }
}

export default HomeDataReducer