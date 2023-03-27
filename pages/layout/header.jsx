import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import {useEffect} from "react";

function Login () {

  useEffect(() => {
    if ((localStorage.getItem("user") ) !== undefined && (localStorage.getItem("user") ) !== null) {
      document.getElementById("label").innerHTML = "Logout";
      document.getElementById("label").href = "http://localhost:3000";
      document.getElementById("label").onclick = function() {
        localStorage.clear();
      }
    }
  });

  return (
      <Button id="label" href="http://localhost:3000/login" color="inherit">Login</Button>
  );
}


function header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ticket Bass-Turd
          </Typography>
          {Login()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default header;