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
import Image from 'next/image';
import logo from '../../images/logo.png';
import {useEffect} from "react";

function Login () {

  useEffect(() => {
    if ((localStorage.getItem("user") ) !== undefined && (localStorage.getItem("user") ) !== null) {
      document.getElementById("label").innerHTML = "Logout";
      document.getElementById("label").href = "http://localhost:3000";
      document.getElementById("label").onclick = function() {
        localStorage.clear();
      }
        document.getElementById("name").innerHTML = "Hi, " + localStorage.getItem("first_name");
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
          <Link href={'../../'}>
            <Image src={logo} width={50} height={50}/>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ticketbass-Turd
          </Typography>
          <Typography id='name' variant={'h7'}></Typography>
          {Login()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default header;