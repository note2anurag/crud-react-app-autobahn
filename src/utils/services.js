import { addPost, editPost, setposts } from "../store/postsSlice";
import { read, create, update } from "./requestUtils";
const baseUrl = "https://jsonplaceholder.typicode.com/";
const userId = 1;

/**
 * @function getAllPosts
 * @description  Fetches all posts data using baseUrl
 * @param ()
 **/
export const getAllPosts = () => async (dispatch, getState) => {
  try {
    const res = await read(`${baseUrl}posts`);
    if (res) {
      dispatch(setposts(res?.data))
    }
  } catch (error) {
    console.log("Error In Getting Data", error);
  }
};

/**
 * @function createPost
 * @description  creates a new post data using baseUrl
 * @param (object)
 **/
export const createPost = (data) => async (dispatch, getState) => {
  try {
    const res = await create(`${baseUrl}posts`, data);
    if (res) {
      dispatch(addPost(res?.data))
    }
  } catch (error) {
    console.log("Error in Saving Data", error);
  }
};

/**
 * @function updatePost
 * @description  updates already created post data using baseUrl
 * @param (object)
 **/
export const updatePost = (data) => async (dispatch, getState) => {
  try {
    const res = await update(`${baseUrl}posts/${userId}`, data);
    if (res) {
      /** 
        actual response data =  res?data
        request body = data
        dispatch(editPost(res?data));
        not dispatching the actual response data as it returns default value on each update
        assigning the request body to update the store to see the flow as in realtime 
      **/
      dispatch(editPost(data));
    }
  } catch (error) {
    console.log("Error in Updating Data", error);
  }
};
