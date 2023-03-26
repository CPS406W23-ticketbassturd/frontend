import React from 'react';
import TicketList from './currentAccountTickets.jsx';

const App = () => {
  const tickets = [
    {
      ticketId: 1,
      eventId: 123,
      price: 50.0,
      section: 1,
    },
    {
      ticketId: 2,
      eventId: 456,
      price: 75.0,
      section: 1,
    },
    {
      ticketId: 3,
      eventId: 789,
      price: 100.0,
      section: 1,
    },
  ];

  return <TicketList tickets={tickets} />;
};

export default App;