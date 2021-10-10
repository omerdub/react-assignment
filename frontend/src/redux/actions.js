import * as actions from "./actionTypes";
import axios from 'axios';
import environment from "../environments/environment";


export const fetchUsersRequest = () => {
    return {
        type: actions.FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = users => {
    return {
        type: actions.FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: actions.FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get(`${environment.serverUrl}/users`)
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            });
    }
}