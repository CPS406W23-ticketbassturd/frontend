import React from 'react';
import OrderHistory from './orderHistory.jsx';

const App = () => {
  const orders = [
    {
      eventId: 123,
      price: 50.0,
      invoiceNumber: 'INV-001',
    },
    {
      eventId: 456,
      price: 75.0,
      invoiceNumber: 'INV-002',
    },
    {
      eventId: 789,
      price: 100.0,
      invoiceNumber: 'INV-003',
    },
  ];

  return <OrderHistory orders={orders} />;
};

export default App;