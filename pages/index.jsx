import Head from 'next/head'
import Header from './layout/header'
import Footer from './layout/footer'
import {Typography} from '@mui/material';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: 'auto',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ticketbass-Turd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      <Stack spacing={2} sx={{pt:15}}>
          <Typography variant="h1" align={'center'}>Tickets for your Next Event</Typography>
          <Typography variant="h3" align={'center'}>Welcome to Ticketbass-Turd</Typography>
      </Stack>
          <Box sx={{m: 10}}>
              <Search>
                  <SearchIconWrapper>
                      <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                      id="search"
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                  />
              </Search>
          </Box>
      <Stack direction={{ sm: 'column', md: 'row'}} spacing={{xs: '5%', md: '2%'}} alignItems={'center'} justifyContent={'center'}>
          <Button id={'searchButton'} onClick={
                () => {
                    const query = document.getElementById('search').value;
                    if (query === '') {
                        alert('Please enter a search query')
                    } else {
                        localStorage.setItem('query', query)
                        window.location.href = '/search/event';
                    }
                }
          } variant="contained">Search for an Event</Button>
          <Button onClick={
              () => {
                  const query = document.getElementById('search').value;
                  if (query === '') {
                      alert('Please enter a search query')
                  } else {
                      localStorage.setItem('query', query)
                      window.location.href = '/search/venue';
                  }
              }
          } variant="contained">Search for a Venue</Button>
          <Button onClick={
              () => {
                  const query = document.getElementById('search').value;
                  if (query === '') {
                      alert('Please enter a search query')
                  } else {
                      localStorage.setItem('query', query)
                      window.location.href = '/search/user';
                  }
              }
          } variant="contained">Search for a Host</Button>
      </Stack>
      <Footer />
      </main>
    </>
  )
}
