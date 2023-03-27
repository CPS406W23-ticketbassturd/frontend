import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Head from 'next/head'

const TicketInfo = ({ ticketSection, price, eventId }) => {
  return (
    <div>
      <Head>
        <title>Ticket Info | Ticketbass-Turd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 style={{textAlign: 'center'}}>Ticket Information</h1>
      <p style={{textAlign: 'center'}}>{`Ticket Section: ${ticketSection}`}</p>
      <p style={{textAlign: 'center'}}>{`Price: ${price}`}</p>
      <p style={{textAlign: 'center'}}>{`Event ID: ${eventId}`}</p>
      <Footer />
    </div>
  );
};

export default TicketInfo;