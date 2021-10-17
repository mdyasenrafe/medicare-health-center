import React from "react";
import { Row } from "react-bootstrap";
import UseService from "../../../Hooks/UseService";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const { services } = UseService();
  return (
    <section>
      <div className="py-5 text-center">
        <h1>
          <span>Our </span>
          <span className="text-danger"> Services</span>
        </h1>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 p-4 p-md-0">
        {services.map((service) => (
          <SingleService key={service.id} data={service}></SingleService>
        ))}
      </Row>
    </section>
  );
};

export default Services;
