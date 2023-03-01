import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <header>
      <div className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <NavLink to="/" className="text-white">
                  Amazon
                </NavLink>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here ..."
                  aria-label="Search Product Here ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <NavLink className="header-upper-links_item">
                    <img src="img/compare.svg" alt="compare" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </NavLink>
                </div>

                <div>
                  <NavLink className="header-upper-links_item">
                    <img src="img/wishlist.svg" alt="Favourite" />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </NavLink>
                </div>

                <div>
                  <NavLink className="header-upper-links_item">
                    <img src="img/user.svg" alt="user" />
                    <p>
                      Login in <br /> My Account
                    </p>
                  </NavLink>
                </div>

                <div>
                  <NavLink to="cart" className="header-upper-links_item">
                    <img src="img/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$ 500</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="menu-links_text btn btn-secondary dropdown-toggle d-flex gap-15 align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="img/menu.svg" alt="menu" />
                      <span className="me-5 d-inline-block">
                        SHOP CATEGORIES
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          className="dropdown-item text-white"
                          to="detail"
                        >
                          Detail
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item text-white" to="/">
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item text-white" to="/">
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="menu-links_text" to="/">
                      HOME
                    </NavLink>
                    <NavLink className="menu-links_text" to="/">
                      OUR STORE
                    </NavLink>
                    <NavLink className="menu-links_text" to="/">
                      BLOGS
                    </NavLink>
                    <NavLink className="menu-links_text" to="/">
                      CONTACT
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
