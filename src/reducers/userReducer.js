
export const types = {
    GET_BY_USER: "GET_BY_USER"
};

export const initialState = {
    status: 'loading',
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BY_USER:
            return {
                ...state,
                status: action.payload.status,
                user: action.payload.content
            };
        default:
            return { ...state };
    }
};

export default userReducer;
