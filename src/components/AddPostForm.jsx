import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createPost } from "../utils/services";

const AddPostForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const routeChange = () => {
    navigate("/");
  };
  const handlePostAdd = (data) => {
    const post = {
      title: data.title,
      body: data.content,
      userId: 1,
    };
    dispatch(createPost(post));
    routeChange();
  };

  return (
    <div style={{ width: "360px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(handlePostAdd)}>
        <label for="tname">Title:</label>
        <br />
        <input
          name="title"
          {...register("title", { required: true })}
          style={{ width: "250px", height: "20px", fontSize: "14px" }}
        />
        <br />
        <label for="bname">Content:</label>
        <br />
        <textarea
          name="content"
          {...register("content", { required: true })}
          style={{ width: "250px", height: "100px", fontSize: "12px" }}
        />
        <br />
        <br />
        <button style={{ width: "160px", height: "40px", fontSize: "16px" }}>
          Add Post
        </button>
      </form>
    </div>
  );
};
export default AddPostForm;
