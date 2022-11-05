import { it, jest } from "@jest/globals";
import axios from "axios";
import { getAllPosts, createPost, updatePost } from "../utils/services";

jest.mock("axios");
const dispatch = jest.fn();

it("Should call getAllPosts with success status", async () => {
  const getState = () => {
    return {
      posts: [],
    };
  };
  const data = [
    {
      id: 1,
      title: "testing title",
      body: "testing content",
      userId: 1,
    },
  ];
  axios.get.mockResolvedValue({
    status: 200,
    data,
  });

  await getAllPosts()(dispatch, getState);
});

it("Should call createPost with success status", async () => {
  const getState = () => {
    return {
      posts: [
        {
          id: 1,
          title: "testing title",
          body: "testing content",
          userId: 1,
        },
      ],
    };
  };
  const data = {
    id: 2,
    title: "testing title",
    body: "testing content",
    userId: 1,
  };
  axios.post.mockResolvedValue({
    status: 200,
    data,
  });

  await createPost({
    title: "testing title",
    body: "testing content",
    userId: 1,
  })(dispatch, getState);
});

it("Should call UpdatePost with success status", async () => {
    const getState = () => {
      return {
        posts: [
          {
            id: 1,
            title: "testing title",
            body: "testing content",
            userId: 1,
          },
          {
            id: 2,
            title: "testing title",
            body: "testing content",
            userId: 1,
          }
        ],
      };
    };
    const data = {
      id: 2,
      title: "testing title",
      body: "testing content",
      userId: 1,
    };
    axios.put.mockResolvedValue({
      status: 200,
      data,
    });
  
    await updatePost({
      id: 2,
      title: "updating title",
      body: "updating content",
      userId: 1,
    })(dispatch, getState);
  });
  