import React from "react";
import "./PortFolioPage.css";

const PortFolio = () => {
  return (
    <section className="main-section" id="PortFolio">
      <div className="project">
        <h1 className="myh2">My Latest Project </h1>
        <p className="para1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      <div className="port-container">
        <div className="portfolio-card">
          <div className=" img1 child">
            <div className="inner-port">
              <p className="porffolio-title">Development</p>
              <h4 className="big-shows">Getting tickets to the big show</h4>
              <button className="views-btn">View Details</button>
            </div>
          </div>

        </div>

        <div className="portfolio-card ">
          <div className="img2 child">
            <div className="inner-port ">
              <p className="porffolio-title">Development</p>
              <h4 className="big-shows">Getting tickets to the big show</h4>
              <button className="btn-view">View Details</button>
            </div>
          </div>

        </div>

        <div className="portfolio-card  ">
          <div className="child img3">
            <div className="inner-port">
              <p className="porffolio-title">Development</p>
              <h4 className="big-shows">Getting tickets to the big show</h4>
              <button className="btn-view">View Details</button>
            </div>
          </div>

        </div>

        <div className="portfolio-card ">
          <div className="child img4">
            <div className="inner-port">
              <p className="porffolio-title">Development</p>
              <h4 className="big-shows">Getting tickets to the big show</h4>
              <button className="btn-view">View Details</button>
            </div>
          </div>

        </div>

        <div className="portfolio-card  ">
          <div className="child img3">
            <div className="inner-port">
              <p className="porffolio-title">Development</p>
              <h4 className="big-shows">Getting tickets to the big show</h4>
              <button className="btn-view">View Details</button>
            </div>
          </div>

        </div>

        <div className="portfolio-card ">
          <div className="child img4">
            <div className="inner-port">
              <p className="porffolio-title">Development</p>
              <h4 className="big-shows">Getting tickets to the big show</h4>
              <button className="btn-view">View Details</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortFolio;
