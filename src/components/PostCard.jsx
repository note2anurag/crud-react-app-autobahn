import React from "react";
import { useDispatch } from "react-redux";
import { selectPostId } from "../store/postsSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EDIT_POST } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const PostCard = (props) => {
  const { title, body, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = (e) => {
    console.log(e.currentTarget.id);
    dispatch(
      selectPostId({
        selectedId: e.currentTarget.id,
      })
    );
    navigate("/edit");
  };
  return (
    <Card sx={{ minHeight: 120 }}>
      <CardContent sx={{ minHeight: "inherit", padding: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id={id} onClick={routeChange}>
          {EDIT_POST} : {id}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
