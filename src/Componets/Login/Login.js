import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import image from "../../Images/signin.png";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <section>
      <Container>
        <Row className="align-items-center flex-row-reverse">
          <Col sm={12} md={6}>
            <img className="w-100" src={image} alt="" />
          </Col>
          <Col sm={12} md={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Email"
                className="mb-3"
              >
                <Form.Control
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="mb-3"
                />
              </FloatingLabel>
              {errors.email && (
                <span className="text-danger my-3">This field is required</span>
              )}
              <FloatingLabel
                controlId="floatingPassword"
                label="Enter Your Password"
                className="Enter Your Password mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                  })}
                />
              </FloatingLabel>
              {errors.password?.type === "required" && (
                <span className="text-danger my-3">This field is required</span>
              )}
              <input
                type="submit"
                className="btn btn-outline-danger my-4 w-100 d-block"
              />
            </Form>
            <h5>
              Do not Have Any Aceount ?
              <Link className="text-danger" to="signup">
                <span>click here</span>
              </Link>
            </h5>
            <div className="text-center pt-3 pb-3">
              <h4>Or</h4>
            </div>
            <div>
              <button className="btn btn-danger rounded w-100 d-block">
                <i className="fab fa-google"></i>
                <span className="ms-4">Sign in With Google</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
