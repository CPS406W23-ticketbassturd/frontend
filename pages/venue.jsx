import React from 'react';
import VenuePage from './elementsPages/venuePage.jsx';

export async function getServerSideProps(context) {
  const response = await fetch('127.0.0.1:8000')
  const data = await response.json()

  return {
      props:{

      },
  }
};

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