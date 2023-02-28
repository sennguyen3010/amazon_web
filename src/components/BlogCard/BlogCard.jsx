import React from 'react';

export default function BlogCard() {
  return (
    <div className="col-4">
      <div className="blog-card">
        <div className="blog-img">
          <img className="w-100" src="img/blog-2.jpeg" alt="" />
        </div>
        <div className="blog-detail">
          <h4>Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptates eum temporibus necessitatibus iste perferendis quibusdam!
            Autem nesciunt, perspiciatis ad iste similique repellat deleniti
            debitis illo esse, neque explicabo recusandae!
          </p>
        </div>
      </div>
    </div>
  );
}
