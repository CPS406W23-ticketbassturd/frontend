import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt:20 }}>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Grid container wrap="nowrap">

            <Grid xs={20}>
        <Typography variant="body-1" color="inherit" component="div" fontStyle={'italic'}>
        A CPS406 Project
        </Typography>
            </Grid>

          <Grid xs={0}>
        <Link href={'../../faqPage'} alignSelf="right">
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