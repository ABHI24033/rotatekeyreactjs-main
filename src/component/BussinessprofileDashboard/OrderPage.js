import React from 'react';
// import './featu.css';

const OrderPage = () => {
  const listingsSold = 20; // Replace this with the actual number of listings sold

  return (
    <div className="orders-page">
      <h3>Listings Sold For This  Account : {listingsSold}</h3>
      
    </div>
  );
};

export default OrderPage;
