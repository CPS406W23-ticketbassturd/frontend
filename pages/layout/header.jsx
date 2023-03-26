import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="My Logo" />
          </a>
        </Link>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Button color="inherit">Sign In</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;