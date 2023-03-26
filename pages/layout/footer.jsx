import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        <Typography variant="h6" color="inherit" component="div">
        © 2023 ELITE TEAM
          <Link href="#" alignSelf="flex-end">FAQ</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;