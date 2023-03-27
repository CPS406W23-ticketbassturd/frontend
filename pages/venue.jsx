import React from 'react';
import VenuePage from '../venuePage.jsx';

const App = () => {
  const venue = {
    venueId: '82937',
    venueName: 'Some Venue',
    venueAddress: '123 Main St, Anytown USA',
    maxCapacity: 1000,
    description: 'A beautiful event space with state-of-the-art amenities.',
  };

  return <VenuePage {...venue} />;
};

export default App;