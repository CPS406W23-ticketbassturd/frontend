import React from 'react';

const VenuePage = ({ venueId, venueName, venueAddress, maxCapacity, description }) => {
  return (
    <div>
      <p>{`Venue Id: ${venueId}`}</p>
      <h1>{venueName}</h1>
      <p>{`Address: ${venueAddress}`}</p>
      <p>{`Max Capacity: ${maxCapacity}`}</p>
      <p>{`Description: ${description}`}</p>
    </div>
  );
};

export default VenuePage;