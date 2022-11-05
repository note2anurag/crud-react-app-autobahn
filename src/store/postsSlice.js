import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
  selectedPostId: null,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectPostId: (state, action) => {
      state.selectedPostId = action.payload.selectedId;
    },
    setposts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

// this is for dispatch
export const { selectPostId, setposts, addPost, editPost } = postsSlice.actions;
export const postsSelector = (state) => state.posts;
// this is for configureStore
export default postsSlice.reducer;
