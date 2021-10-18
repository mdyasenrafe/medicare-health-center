import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import image from "../../Images/signin.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser, error, setError, setIsLoading, signWithEmail, gogleSignin } =
    UseAuth();
  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || "/home";

  // handle google sign in
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
    signWithEmail(data.email, data.password)
      .then((result) => {
        history.push(redirectUrl);
        setUser(result?.user);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <section className="py-5">
      <Container>
        <div className="text-center pb-5">
          <h1>
            <span className="text-danger">Sign </span>
            <span>In</span>
          </h1>
        </div>
        <Row className="align-items-center flex-row-reverse">
          <Col sm={12} md={6}>
            <Fade right cascade>
              <img className="w-100 pb-5" src={image} alt="" />
            </Fade>
          </Col>
          <Col sm={12} md={6}>
            <Fade left cascade>
              <div>
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
                      })}
                    />
                  </FloatingLabel>
                  {errors.password?.type === "required" && (
                    <span className="text-danger my-3">
                      This field is required
                    </span>
                  )}
                  {error && <p className="my-3 text-danger">{error}</p>}
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

export default Login;
