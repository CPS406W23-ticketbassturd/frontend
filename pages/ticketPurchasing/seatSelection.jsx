import React from 'react';

const SeatSelection = ({ sections }) => {
  return (
    <div>
      <h1>Seat Selection</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.sectionNumber}>
            <p>{`Section Number: ${section.sectionNumber}`}</p>
            <p>{`Price: ${section.price}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeatSelection;