import React from 'react';
import UserPage from '../userPage.jsx';

const App = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    userId: '12345',
  };

  return <UserPage {...user} />;
};

export default App;