import {POSTS_UPDATE} from "../actions/actionTypes";

const initialValue = {
  posts: [],
};

export const postsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case POSTS_UPDATE:
      return {
        ...initialValue,
        posts: action.posts,
      };
    default:
      return state;
  }
};
