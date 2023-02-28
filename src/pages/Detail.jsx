import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

export default function Detail() {
  return (
    <>
      <section className="detail">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="detail-img">
                <img className="w-100" src="img/iphone14.jpeg" alt="" />
              </div>
            </div>
            <div className="col-7">
              <div className="detail-content">
                <h3 className="product-name">iPhone 14 Pro Max 128GB Gold</h3>
                <p className="product-price">100.00 $</p>

                <div className="capacity">
                  <h3 className="capacity-title">Capacity</h3>
                  <ul className="capacity-group d-flex">
                    <li className="capacity-item active">
                      <span className="capacity-item_text">128GB</span>
                    </li>
                    <li className="capacity-item">
                      <span className="capacity-item_text">256GB</span>
                    </li>
                    <li className="capacity-item">
                      <span className="capacity-item_text">512GB</span>
                    </li>
                    <li className="capacity-item">
                      <span className="capacity-item_text">1T</span>
                    </li>
                  </ul>
                </div>

                <div className="stock d-flex align-items-center">
                  <img className="stock-icon" src="img/stock.png" alt="" />
                  <p className="stock-text">Available</p>
                </div>
                <div className="des">
                  <h3 className="capacity-title">About this item</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Architecto quia aliquam excepturi ut dicta corporis illum
                    minima ea nam, commodi similique neque ipsa facere
                    blanditiis laboriosam beatae ad recusandae modi?
                  </p>
                </div>
                <button className="detail-btn-add">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="related-product">
            <h4 className="my-5">Related Products</h4>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
