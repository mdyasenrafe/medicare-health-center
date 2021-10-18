import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import image from "../../../Images/contact.png";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="text-center py-4">
        <h1>
          <span className="text-danger">Contact</span>
          <span> Us</span>
        </h1>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <div>
              <img className="w-100" src={image} alt="" />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <Form>
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
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
