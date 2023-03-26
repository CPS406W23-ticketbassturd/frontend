import React from 'react';

const EventPage = ({ eventId, venue, eventName, eventDate, hostName, minAge }) => {
  return (
    <div>
      <p>{`Event ID: ${eventId}`}</p>
      <h1>{eventName}</h1>
      <p>{`Venue: ${venue}`}</p>
      <p>{`Date: ${eventDate}`}</p>
      <p>{`Minimum Age: ${minAge}`}</p>
      <p>{`Host: ${hostName}`}</p>
    </div>
  );
};

export default EventPage;