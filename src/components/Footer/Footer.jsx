import React from 'react';
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsSearch,
  BsYoutube,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15">
                <img src="img/newsletter.png" alt="newsletter" />
                <h2 className="text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text p-1 footer-item"
                  id="basic-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white">Demo store address</address>
                <a href="" className="text-white d-block mt-4 mb-2 footer-item">
                  Tel: +84 123456789
                </a>
                <a
                  href="mailto:amazon@gmail.com"
                  className="text-white d-block mt-4 mb-2 footer-item"
                >
                  Mail: amazon@gmail.com
                </a>
                <div className="social-icons d-flex gap-30 mt-3">
                  <a className="text-white fs-4 footer-item" href="/">
                    <BsGoogle />
                  </a>
                  <a className="text-white fs-4 footer-item" href="/">
                    <BsFacebook />
                  </a>
                  <a className="text-white fs-4 footer-item" href="/">
                    <BsInstagram />
                  </a>
                  <a className="text-white fs-4 footer-item" href="/">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Infomation</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1 footer-item">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1 footer-item">Search</Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">Faq</Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1 footer-item">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1 footer-item">
                  Smart Watches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
