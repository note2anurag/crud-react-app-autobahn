import { it, expect } from "@jest/globals";
import reducer, { setposts, addPost, selectPostId } from "../store/postsSlice";

it("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    posts: [],
    selectedPostId: null,
  });
});

it("Handle setPosts and update the store", () => {
  const payload = [{ id: 1 }];
  expect(reducer(undefined, setposts(payload))).toEqual({
    selectedPostId: null,
    posts: [{ id: 1 }],
  });
});

it("Handle addPost and update the store", () => {
    const payload = { id: 2 };
    expect(reducer(undefined, addPost(payload))).toEqual({
      selectedPostId: null,
      posts: [{ id: 2 }],
    });
  });

it("Handle selectPostId and update the store", () => {
    const payload = {selectedId:1}
    expect(reducer(undefined, selectPostId(payload))).toEqual({
      selectedPostId: 1,
      posts: [],
    });
  });
