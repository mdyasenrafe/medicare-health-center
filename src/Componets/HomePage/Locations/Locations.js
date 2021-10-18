import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleLocation from "../SingleLocation/SingleLocation";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("./LocationData.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  return (
    <section className="py-5 container">
      <div className="text-center">
        <h1 className="py-4">
          <span>Our </span>
          <span className="text-danger">Locations</span>
        </h1>
      </div>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
        {locations.map((location) => (
          <SingleLocation data={location} key={location.id}></SingleLocation>
        ))}
      </Row>
    </section>
  );
};

export default Locations;
