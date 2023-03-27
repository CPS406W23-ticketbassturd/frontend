import React from 'react';
import TicketInfo from './ticketInfoFunction.jsx';

const App = () => {
  const ticket = {
    ticketSection: 'General Admission',
    price: 50.0,
    eventId: 123,
  };

  return <TicketInfo {...ticket} />;
};

export default App;