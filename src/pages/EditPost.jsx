import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsSelector } from "../store/postsSlice";
import Typography from "@mui/material/Typography";
import { EDIT_POST } from "../constants/constants";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../utils/services";
import GoBack from "../components/GoBack";

const EditPost = () => {
  const { selectedPostId } = useSelector(postsSelector);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  const handlePostUpdate = (data) => {
    const post = {
      id: Number(selectedPostId),
      title: data.title,
      body: data.content,
      userId: 1,
    };
    dispatch(updatePost(post));
    routeChange();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 60,
          padding: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: 40, fontWeight: 500 }}
          variant="h1"
          color="initial"
        >
          {`${EDIT_POST} ${selectedPostId}`}
        </Typography>
        <GoBack />
      </Box>
      <div style={{ width: "360px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit(handlePostUpdate)}>
          <label for="tname">Post Id:</label>
          <br />
          <input
            name="title"
            value={selectedPostId}
            disabled
            style={{ width: "250px", height: "20px", fontSize: "14px" }}
          />
          <br />
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
            Update Post
          </button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
