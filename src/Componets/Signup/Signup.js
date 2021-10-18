import React, { useRef } from "react";
import { Container, FloatingLabel, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import img from "../../Images/signup.jpg";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // get value from useAuth
  const {
    user,
    setUser,
    error,
    setError,
    setIsLoading,
    createAceountWithEmail,
    updataeUser,
  } = UseAuth();

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    console.log(data);
    createAceountWithEmail(data.email, data.password);
    // createAceountWithEmail(data.email, data.password)
    //   .then((result) => {
    //     setUser(result.user);
    //     updataeUser(data.name);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => setIsLoading(false));
  };
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <img src={img} alt="" />
          </Col>
          <Col sm={12} md={6}>
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
                <span className="text-danger my-3">This field is required</span>
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
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*?[#?!@$%^&*-])/,
                  })}
                />
              </FloatingLabel>
              {errors.password?.type === "required" && (
                <span className="text-danger my-3">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-danger my-3">
                  Your password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-danger my-3">
                  Your password Maximum 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-danger my-3">
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
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
              </FloatingLabel>
              {errors.password_repeat?.type === "required" && (
                <span className="text-danger my-3">This field is required</span>
              )}
              {errors.password_repeat?.type === "validate" && (
                <span className="text-danger my-3">
                  The passwords do not match
                </span>
              )}
              <input
                type="submit"
                className="btn btn-outline-danger w-100 d-block my-4"
              />
              <h5>
                Have Any Aceount ?
                <Link className="text-danger" to="signin">
                  <span>click here</span>
                </Link>
              </h5>
            </Form>
            <div className="text-center py-3">
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

export default Signup;
