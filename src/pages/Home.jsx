import React from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import ProductCard from '../components/ProductCard/ProductCard';

export default function Home() {
  return (
    <>
      <section className="home-wrapper-1">
        <div className="main-banner">
          <img src="img/banner-1.jpeg" alt="banner" />
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <h4 className="my-5">Recommended Items</h4>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container">
          <h4 className="my-5">Our Latest News</h4>
          <div className="row">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}
