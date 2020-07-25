import {POSTS_UPDATE, USERS_UPDATE} from "./actionTypes";

export const updatePosts = value => ({
  type: POSTS_UPDATE,
  posts: value,
});

export const updateUsers = value => ({
  type: USERS_UPDATE,
  users: value,
});
