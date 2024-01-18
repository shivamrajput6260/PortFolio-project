import React from "react";
import { FaChromecast } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { GoStack } from "react-icons/go";
import "./ServicePage.css";
const Service = () => {
  return (
    <section className="main-section" id="Service">
      <div className="awesome">
        <h1 className="myh1">My Awesome Service </h1>
        <p className="para">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="service-container">
        <div className="card">
          <div className="icon__size">
            <a>
              <FaChromecast />
            </a>
          </div>

          <h1 className="business">Business Stratagy</h1>
          <p className="para">
            i through myself down among the tall grass by the stream as i lie
            close to the earth
          </p>
        </div>
        <div className="card">
          <div className="icon__size">
            <a>
              <GoStack />
            </a>
          </div>

          <h1 className="business">Website Development</h1>
          <p className="para">
            i through myself down among the tall grass by the stream as i lie
            close to the earth
          </p>
        </div>
        <div className="card">
          <div className="icon__size">
            <a>
              <GoPerson />
            </a>
          </div>

          <h1 className="business">Marketing & Reporting</h1>
          <p className="para">
            i through myself down among the tall grass by the stream as i lie
            close to the earth
          </p>
        </div>
        <div className="card">
          <div className="icon__size">
            <a>
              <AiOutlineDesktop />
            </a>
          </div>

          <h1 className="business">Mobile App Development</h1>
          <p className="para">
            i through myself down among the tall grass by the stream as i lie
            close to the earth
          </p>
        </div>
        <div className="card">
          <div className="icon__size">
            <a>
              <GoPerson />
            </a>
          </div>

          <h1 className="business">Marketing & Reporting</h1>
          <p className="para">
            i through myself down among the tall grass by the stream as i lie
            close to the earth
          </p>
        </div>
        <div className="card">
          <div className="icon__size">
            <a>
              <AiOutlineDesktop />
            </a>
          </div>

          <h1 className="business">Mobile App Development</h1>
          <p className="para">
            i through myself down among the tall grass by the stream as i lie
            close to the earth
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
