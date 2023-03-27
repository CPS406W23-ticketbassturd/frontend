import React from 'react';
import VenuePage from './elementsPages/venuePage.jsx';

const get_Venue = async (venue_id) => {
  const response = await fetch(`http://127.0.0.1:8000/api/venue/${venue_id}`, {method: 'GET', headers: {'Content-Type': 'application/json', 'Alow-Control-Allow-Origin': '*'}})
  const data = await response.json();
  return data;
}

const App = () => {

  const venue = {}

  const venue1 = {
    venueId: '82937',
    venueName: 'Some Venue',
    venueAddress: '123 Main St, Anytown USA',
    maxCapacity: 1000,
    description: 'A beautiful event space with state-of-the-art amenities.',
  };

  return <VenuePage {...venue} />;
};

export default App;