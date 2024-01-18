import React from "react"
import "./BlogPage.css";
const Blog = () => {
  return (
    <section className="main-section" id="Blog">
      <div className="Blog">
        <h1 className="myh3">Latest News </h1>
        <p className="para11">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="myblog ">
          <div className="child blog-img1">
            <div className="inner-div">
              <p className="para2">Development</p>
              <h4 className="big-show">
                Getting tickets to the big show</h4>
              <button className="btn-view">READ MORE</button>
            </div>
          </div>

        </div>

        <div className="myblog">
          <div className="child blog-img2">
            <div className="inner-div ">
              <p className="para2">Management</p>
              <h4 className="big-show">
                A big ticket gone to be an interesting</h4>
              <button className="btn-view">READ MORE</button>
            </div>
          </div>

        </div>

        <div className="myblog ">
          <div className="child blog-img3">
            <div className="inner-div">
              <p className="para2">Design</p>
              <h4 className="big-show">
                The Home of the Future Could Bebes</h4>
              <button className="btn-view">READ MORE</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;

