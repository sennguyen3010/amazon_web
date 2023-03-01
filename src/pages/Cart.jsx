import React from 'react';
import CartItem from '../components/CartItem/CartItem';

export default function Cart() {
  return (
    <>
      <section className="cart">
        <div className="container">
          <h3 className="mb-4">My cart</h3>
          <div className="row">
            <div className="col-9">
              <div className="cart-left">
                <div className="d-flex cart-check-all">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckChecked"
                      defaultChecked
                    />
                  </div>
                  <label class="form-check-label" for="flexCheckChecked">
                    All items
                  </label>
                </div>
                <CartItem />
              </div>
            </div>
            <div className="col-3">
              <div className="cart-right">
                <div className="cart-right_top p-4">
                  <p className="coupon">Have a coupon?</p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Add coupon"
                      aria-label="Add coupon"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text p-2" id="basic-addon2">
                      Apply
                    </span>
                  </div>
                </div>
                <div className="cart-right_bottom p-4">
                  <ul>
                    <li className="mb-2">
                      <label>Subtotal:</label>
                      <span>$1000</span>
                    </li>
                    <li className="mb-2">
                      <label>Discount:</label>
                      <span className="discount">$0</span>
                    </li>
                    <li>
                      <label>Tax:</label>
                      <span className="tax">$0</span>
                    </li>
                    <hr />
                    <li>
                      <label className="total-title">Total:</label>
                      <span className="total-number">$1000</span>
                    </li>
                  </ul>
                  <button className="cart-btn-checkout ">Checkout</button>
                  <div className="checkout-method row">
                    <div className="col-3 checkout-method_wrap">
                      <div className="checkout-method_item">
                        <img src="img/momo.png" alt="" />
                      </div>
                    </div>
                    <div className="col-3 checkout-method_wrap">
                      <div className="checkout-method_item">
                        <img src="img/paypal.png" alt="" />
                      </div>
                    </div>
                    <div className="col-3 checkout-method_wrap">
                      <div className="checkout-method_item">
                        <img src="img/mastercard.png" alt="" />
                      </div>
                    </div>
                    <div className="col-3 checkout-method_wrap">
                      <div className="checkout-method_item">
                        <img src="img/visapay.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
