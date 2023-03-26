import React from 'react';

const TicketList = ({ tickets }) => {
  return (
    <div>
      <h1>My Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.ticketId}>
            <p>{`Ticket ID: ${ticket.ticketId}`}</p>
            <p>{`Event ID: ${ticket.eventId}`}</p>
            <p>{`Section: ${ticket.section}`}</p>
            <p>{`Price: ${ticket.price}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;