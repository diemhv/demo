import UserService from "../services/Users";

export const types = {
    GET_BY_USER: "GET_BY_USER"
};

const action = {
    getUser
}

function getUser(username) {
    return dispatch => {
        dispatch(request('loading'));
        UserService.getByUser(username).then(user => {
            dispatch(request('success', user));
        })
    }
};

function request(status, content) {
    return {
        type: types.GET_BY_USER,
        payload: {
            status,
            content
        }
    }
}

export default action;