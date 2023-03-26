import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h1>Order History</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.invoiceNumber}>
            <p>{`Event ID: ${order.eventId}`}</p>
            <p>{`Price: ${order.price}`}</p>
            <p>{`Invoice Number: ${order.invoiceNumber}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;