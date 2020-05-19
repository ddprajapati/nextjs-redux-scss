import * as types from '../types';

const initialState = {
    posts: [],
    post: {},
    error: null,
    loading: false
};

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};