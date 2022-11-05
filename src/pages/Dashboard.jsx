import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DASHBOARD } from "../constants/constants";
import AddIcon from "../components/AddIcon";
import PostCard from "../components/PostCard";
import { postsSelector } from "../store/postsSlice";

const Dashboard = () => {
  const { posts } = useSelector(postsSelector);

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 60,
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: 40, fontWeight: 500 }}
          variant="h1"
          color="initial"
        >
          {DASHBOARD}
        </Typography>
        <Typography
          sx={{ fontSize: 16, color: "gray" }}
          variant="h1"
          color="initial"
        >
          {posts?.length >= 1 ? `Total Posts Count - ${posts.length}` : ""}
        </Typography>
        <AddIcon />
      </Box>

      <Box sx={{ width: "100%", marginTop: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {[...posts].reverse().map((post) => (
            <Grid item xs={3} key={post.id}>
              <PostCard id={post.id} title={post.title} body={post.body} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
