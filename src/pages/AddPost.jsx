import React from "react";
import Typography from "@mui/material/Typography";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddPostForm from "../components/AddPostForm";
import Box from "@mui/material/Box";
import GoBack from "../components/GoBack";
const AddPost = () => {

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
        <div style={{ display: "flex", alignItems: "center" }}>
          <PostAddIcon
            sx={{
              height: 60,
              width: 60,
            }}
          />
          <Typography
            sx={{ fontSize: 40, fontWeight: 500 }}
            variant="outlined"
            color="initial"
          >
            Add New Post
          </Typography>
        </div>
      <GoBack />
      </Box>
      <div style={{ width: "360px", margin: "0 auto" }}>
        <AddPostForm />
      </div>
    </>
  );
};

export default AddPost;
