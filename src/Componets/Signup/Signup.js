import React, { useRef } from "react";
import { Container, FloatingLabel, Form, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
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
    setUser,
    error,
    setError,
    setIsLoading,
    createAceountWithEmail,
    updateProfileEmail,
    gogleSignin,
  } = UseAuth();

  const password = useRef({});
  password.current = watch("password", "");

  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.pathname?.state?.from || "/home";

  //handle gogle sign in
  const handleGogleSignin = () => {
    gogleSignin()
      .then((result) => {
        history.push(redirectUrl);
        setError("");
        setIsLoading(false);
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error.message);
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    createAceountWithEmail(data.email, data.password)
      .then((result) => {
        updateProfileEmail(data.name);
        history.push(redirectUrl);
        setIsLoading(false);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setUser({});
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <section className="py-5 px-4 px-md-0">
      <Container>
        <div className="text-center pb-5">
          <h1>
            <span className="text-danger">Sign </span>
            <span>Up</span>
          </h1>
        </div>
        <Row className="align-items-center">
          <Col sm={12} md={6} className="text-center">
            <Fade left cascade>
              <img src={img} alt="" />
            </Fade>
          </Col>
          <Col sm={12} md={6}>
            <Fade right cascade>
              <div className="py-5">
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
                    <span className="text-danger my-3">
                      This field is required
                    </span>
                  )}
                  <FloatingLabel
                    controlId="floatingInput1"
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
                    <span className="text-danger my-3">
                      This field is required
                    </span>
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
                    <span className="text-danger my-3">
                      This field is required
                    </span>
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
                    controlId="floatingPassword1"
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
                    <span className="text-danger my-3">
                      This field is required
                    </span>
                  )}
                  {errors.password_repeat?.type === "validate" && (
                    <span className="text-danger my-3">
                      The passwords do not match
                    </span>
                  )}
                  {error && <p className="my-3 text-danger">{error}</p>}
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
                  <button
                    onClick={handleGogleSignin}
                    className="btn btn-danger rounded w-100 d-block"
                  >
                    <i className="fab fa-google"></i>
                    <span className="ms-4">Sign in With Google</span>
                  </button>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
