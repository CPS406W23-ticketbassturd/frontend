import React from 'react';
import EventPage from '../eventPage.jsx';

const App = () => {
  const event = {
    eventId: '88273',
    venue: 'Some Venue',
    eventName: 'Cool Event',
    eventDate: '2023-04-01',
    hostName: 'John Doe',
    minAge: '18',
  };

  return <EventPage {...event} />;
};

export default App;