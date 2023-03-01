import React from 'react';
import { BsTrash } from 'react-icons/bs';

export default function CartItem() {
  return (
    <>
      <section className="cart-item row">
        <div className="col-2 d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckChecked"
              defaultChecked
            />
          </div>

          <div className="cart-item_img">
            <img className="w-100" src="img/iphone14.jpeg" alt="" />
          </div>
        </div>
        <div className="col-8">
          <div className="cart-item_des">
            <h5 className="product-title">Iphone 14 promax</h5>
            <p className="product-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aperiam quo autem minima tempore voluptatibus repellendus soluta
              nemo quam aut? Officiis quos in delectus qui eius consectetur
              rerum quae aliquid.
            </p>
            <div className="action-box d-flex align-items-center my-2">
              <div className="action-box_count d-flex ">
                <p className="action-box_count_decrease d-flex align-items-center justify-content-center">
                  -
                </p>
                <p className="action-box_count_number d-flex align-items-center justify-content-center">
                  1
                </p>
                <p className="action-box_count_increase d-flex align-items-center justify-content-center">
                  +
                </p>
              </div>
              <div className="action-box_del d-flex align-items-center justify-content-center">
                <BsTrash className="action-box_del_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <div className="cart-item_price">
            <p>$100.00</p>
          </div>
        </div>
      </section>
    </>
  );
}
