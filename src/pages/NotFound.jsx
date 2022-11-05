import React from 'react'
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{display: 'grid', placeItems: 'center', margin:'0 auto', height : '100vh'}}>
        <Typography gutterBottom variant="h5" component="div">
          PAGE NOT FOUND
        </Typography>
        <Button variant="outlined" onClick={()=> navigate('/')}>Go Back</Button>
    </Box>
  )
}

export default NotFound