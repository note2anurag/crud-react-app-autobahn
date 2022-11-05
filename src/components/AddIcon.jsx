import React from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ADD_POST } from "../constants/constants";

const AddIcon = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/add");
  };
  return (
    <Tooltip title={ADD_POST}>
      <Box
        onClick={routeChange}
        sx={{
          width: 200,
          height: 50,
          display: "flex",
          border: "1px solid black",
          borderRadius: "4px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Typography variant="h5">{ADD_POST}</Typography>

        <PostAddIcon
          sx={{
            height: 40,
            width: 40,
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default AddIcon;
