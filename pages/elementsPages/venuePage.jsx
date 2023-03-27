import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Head from 'next/head'

const VenuePage = ({ venueId, venueName, venueAddress, maxCapacity, description }) => {
  return (
    <div>
      <Head>
        <title>Venue | Ticketbass-Turd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <p style={{textAlign: 'center'}}>{`Venue Id: ${venueId}`}</p>
      <h1 style={{textAlign: 'center'}}>{venueName}</h1>
      <p style={{textAlign: 'center'}}>{`Address: ${venueAddress}`}</p>
      <p style={{textAlign: 'center'}}>{`Max Capacity: ${maxCapacity}`}</p>
      <p style={{textAlign: 'center'}}>{`Description: ${description}`}</p>
      <Footer />
    </div>
  );
};

export default VenuePage;