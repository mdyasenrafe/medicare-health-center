import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container ps-5 banner-text">
        <h1 className="text-light banner-heading-text">
          <span>The World Best</span>
          <span className="text-danger"> Medical</span>
        </h1>
        <h1 className="text-light  banner-heading-text">
          <span className="text-danger">HelthCare </span>
          <span> Center</span>
        </h1>
        <h5 className="text-light mt-4 banner-parragraph-text">
          We at MediCare-health-center are always fully focused on helping your
          child and you and your family. and We’ve always maintained high
          standards of safety and cleanliness. In addition to our existing
          ongoing safety procedures, we're taking extra measures to keep us all
          well.
        </h5>
        <div className="mt-5">
          <Link to="/services">
            <button className="btn btn-danger">Our Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
