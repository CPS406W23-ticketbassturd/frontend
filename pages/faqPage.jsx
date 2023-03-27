import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../layout/header';
import Footer from '../layout/footer';

function FAQPage() {
  return (
    <div>
    <Header />
    <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" alignItems="center">

      <Typography variant="h3" color="inherit" component="div">
        FAQ (Frequently Asked Questions)
      </Typography>

      <Typography variant="h6">
        How long will it take to get an invoice?
      </Typography>
      <Typography varaint="h6">
      It will typically take around 1 business day
      </Typography>

      <Typography variant="h6">
        Can i get a refund on my tickets?
      </Typography>
      <Typography varaint="h6">
      no lol
      </Typography>

      <Typography variant="h6">
        How do I change my account information?
      </Typography>
      <Typography varaint="h6">
      My Account pages then press Change Account Info
      </Typography>

      <Typography variant="h6">
        How do I access my tickets?
        My Account pages then press Current Tickets
      </Typography>
      <Typography varaint="h6">
        My Account pages then press Current Tickets
      </Typography>

      <Typography variant="h6">
        Is reselling allowed?
      </Typography>
      <Typography varaint="h6">
        There is no resale feature
      </Typography>
    </Box>
    <Footer />
    </div>
  );
}

export default FAQPage;