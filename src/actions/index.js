import {POSTS_UPDATE} from "./actionTypes";

export const updatePosts = value => ({
  type: POSTS_UPDATE,
  posts: value,
});

export default updatePosts;
