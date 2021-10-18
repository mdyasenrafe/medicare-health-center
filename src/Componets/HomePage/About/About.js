import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import img from "../../../Images/about.png";
const About = () => {
  return (
    <section>
      <Container>
        <div className="text-center py-5">
          <h1 className="title">
            <span className="text-danger">About</span>
            <span> Us</span>
          </h1>
        </div>
        <Row className="align-items-center px-4 px-md-0">
          <Col sm={12} lg={6}>
            <div>
              <p>
                Medicare-Health-Center is part of Medicare Group, present in
                over 25 cities, with 30+ hospitals, 15 clinics and 50+
                diagnostic centers across 2 continents, in their mission to
                provide quality healthcare in emerging markets.
              </p>
              <p>
                Medicare-Health-Center is the first and only hospital to be
                accredited by the Joint Commission International (JCI) 5 times
                in a row. The JCI Gold Seal of Approval is a globally recognized
                and reflects an organization’s commitment to best practices in
                quality and patient safety. Medicare-Health-Center was first
                accredited by JCI in 2008 and till date remains the only
                hospital in Bangladesh to hold this international recognized
                standard. Accreditation by recognized international institutions
                such as JCI are crucial to drive compliance and improve quality
                and cost-effectiveness across the hospitals and has become a
                priority for healthcare organizations across the world.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="mt-5 mt-md-0">
              <img className="w-100" src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
