import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const GoBack = (props) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return (
    <Button
      size="small"
      variant="outlined"
      sx={{ fontSize: 16, width: 100, height: 40 }}
      onClick={routeChange}
    >
      {`Go Back`}
    </Button>
  );
};

export default GoBack;
