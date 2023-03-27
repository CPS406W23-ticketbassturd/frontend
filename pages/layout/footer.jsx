import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Grid container wrap="nowrap">

            <Grid xs={20}>
        <Typography variant="h6" color="inherit" component="div">
        © 2023 ELITE TEAM
        </Typography>
            </Grid>

          <Grid xs={0}>
        <Link href="#" alignSelf="right">
        <Typography variant="h6" color="white" component="div">
         FAQ
        </Typography>
        </Link>
          </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;