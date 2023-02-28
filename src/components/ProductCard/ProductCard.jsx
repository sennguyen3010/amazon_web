import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default function ProductCard() {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-img">
          <img className="w-100" src="img/apple-watch-3.jpeg" alt="watch" />
        </div>
        <div className="product-detail">
          <h6 className="brand">Iphone</h6>
          <h5 className="product-title">Iphone 14 promax</h5>
          <p>$100.00</p>
          <ReactStars
            count={5}
            size={24}
            value="4"
            edit={false}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
}
