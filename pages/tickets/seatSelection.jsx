import React from 'react';
import SeatSelection from './seatSelectionFunction.jsx';

const App = () => {
  const sections = [
    {
      sectionNumber: 1,
      price: 50.0,
    },
    {
      sectionNumber: 2,
      price: 75.0,
    },
    {
      sectionNumber: 3,
      price: 100.0,
    },
  ];

  return <SeatSelection sections={sections} />;
};

export default App;