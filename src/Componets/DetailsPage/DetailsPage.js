import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import UseService from "../../Hooks/UseService";

const DetailsPage = () => {
  const { services } = UseService();
  const { key } = useParams();
  const findService = services.find((service) => service.key === key);
  return (
    <section className="px-4 px-md-0">
      <Container>
        <div className="py-4">
          <h1 className="pb-4">
            <span>What is </span>
            <span className="text-danger">{findService?.name}</span>
          </h1>
          <img className="w-100" src={findService?.photo1} alt="" />
        </div>
        <p>{findService?.fullDescription}</p>
        <div>
          <h1 className="py-4">
            What Causes <span className="text-danger">{findService?.name}</span>
          </h1>
          <p>{findService?.causes}</p>
        </div>
        <div>
          <h1 className="py-4">
            What are <span className="text-danger">{findService?.name}</span>{" "}
            symptoms and signs?
          </h1>
          <ul className="fs-4 pb-4">
            <li>{findService?.symptoms[0]}</li>
            <li>{findService?.symptoms[1]}</li>
            <li>{findService?.symptoms[2]}</li>
            <li>{findService?.symptoms[3]}</li>
          </ul>
        </div>
        <div>
          <h1 className="py-4">
            What is the treatment for
            <span className="text-danger">{findService?.name}</span>?
          </h1>
          <p>{findService?.treatment}</p>
        </div>
        <div className="text-center my-4">
          <button className="btn btn-danger">Book Your Appoinmenet</button>
        </div>
      </Container>
    </section>
  );
};

export default DetailsPage;
