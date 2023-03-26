import React from 'react';

const TicketInfo = ({ ticketSection, price, eventId }) => {
  return (
    <div>
      <h1>Ticket Information</h1>
      <p>{`Ticket Section: ${ticketSection}`}</p>
      <p>{`Price: ${price}`}</p>
      <p>{`Event ID: ${eventId}`}</p>
    </div>
  );
};

export default TicketInfo;