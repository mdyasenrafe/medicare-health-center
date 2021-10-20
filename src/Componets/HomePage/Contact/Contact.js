import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import image from "../../../Images/contact.png";

const Contact = () => {
  return (
    <section className="py-5 px-4 px-md-0">
      <Flip top cascade>
        <div className="text-center py-4">
          <h1>
            <span className="text-danger">Contact</span>
            <span> Us</span>
          </h1>
        </div>
      </Flip>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6} className="text-center">
            <Fade left cascade>
              <div>
                <img className="w-100" src={image} alt="" />
              </div>
            </Fade>
          </Col>
          <Col sm={12} md={6}>
            <Fade right cascade>
              <Form className="mt-5">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Enter Your subject"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Enter Your Message"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <input
                  className="btn btn-danger d-block w-100 mt-5"
                  type="submit"
                />
              </Form>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
