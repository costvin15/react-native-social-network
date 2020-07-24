import {POSTS_UPDATE, USERS_UPDATE} from "../actions/actionTypes";

const initialValue = {
  users: [],
};

export const usersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case USERS_UPDATE:
      return {
        ...initialValue,
        users: action.users,
      };
    default:
      return state;
  }
};
