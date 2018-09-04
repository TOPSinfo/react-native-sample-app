import * as ActionTypes from '../Actions/ActionTypes';
import firebase from 'firebase'

export const fetchHomeData = () => {
    return dispatch => {
        dispatch({
            type: ActionTypes.SERVICE_PENDING
        })
        firebase.database().ref('DemoData/').once('value').then((snapshot) => {
            dispatch({
                type: ActionTypes.SERVICE_SUCCESS,
                data: snapshot.val()
            })
        }).catch(error => {
            dispatch({
                type: ActionTypes.SERVICE_ERROR,
                error: error
            })
        });
    }
}