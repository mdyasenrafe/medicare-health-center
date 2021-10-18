import React, { useRef } from "react";
import { Container, FloatingLabel, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import img from "../../Images/signup.jpg";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data);
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} lg={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Name"
                className="mb-3"
              >
                <Form.Control
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="mb-3"
                />
              </FloatingLabel>
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Your Email Address"
                className="mb-3"
              >
                <Form.Control
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="name@example.com"
                  className="mb-3"
                />
              </FloatingLabel>
              {errors.email && (
                <span className="text-danger">This field is required</span>
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
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*?[#?!@$%^&*-])/,
                  })}
                />
              </FloatingLabel>
              {errors.password?.type === "required" && (
                <span className="text-danger">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-danger">
                  Your password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-danger">
                  Your password Maximum 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-danger">
                  Your password must contain at least one Special letter
                </span>
              )}
              <FloatingLabel
                controlId="floatingPassword"
                label="Enter Your Re-Password"
                className="Enter Your Password"
              >
                <Form.Control
                  type="password"
                  placeholder="Password_repeat"
                  {...register("password_repeat", {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
              </FloatingLabel>
              {errors.password_repeat?.type === "required" && (
                <span className="text-danger">This field is required</span>
              )}
              {errors.password_repeat?.type === "validate" && (
                <span className="text-danger">The passwords do not match</span>
              )}
              <input
                type="submit"
                className="btn btn-outline-danger w-100 d-block my-5"
              />
            </Form>
          </Col>
          <Col sm={12} lg={6}>
            <img src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
