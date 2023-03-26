import React from 'react';

const UserPage = ({ firstName, lastName, userId }) => {
  return (
    <div>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`User ID: ${userId}`}</p>
    </div>
  );
};

export default UserPage;