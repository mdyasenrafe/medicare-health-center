import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import "./Appointment.css";

const Appointment = () => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="py-5">
      <div>
        <h1 className="text-center">
          <span>Your</span>
          <span className="text-danger"> Appointment</span>
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <Form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: true })}
            defaultValue={user?.displayName}
            className="py-1 mb-3 appointment-input"
          />
          <br />
          {errors.name && <span>This field is required</span>}
          <input
            type="text"
            {...register("email", { required: true })}
            defaultValue={user?.email}
            className="py-1 mb-3 appointment-input"
          />
          <br />
          {errors.email && <span>This field is required</span>}
          <Form.Select aria-label="Default select example  appointment-input">
            <option>Please Selet Your Probleam</option>
            <option value="Heart Attack">Heart Attack</option>
            <option value="Brain cancer">Brain cancer</option>
            <option value="Alzheimer's disease">Alzheimer's disease</option>
            <option value="Lung cancer">Lung cancer</option>
            <option value="Diabetes">Diabetes</option>
            <option value="COPD">COPD</option>
          </Form.Select>
          <label className="mt-3" htmlFor="data">
            Please Select Your Date
          </label>
          <br />
          <input
            className="appointment-input"
            type="date"
            id="start"
            name="trip-start"
            min="2021-10-01"
            max="2022-12-31"
          />
          <br />

          <input className="btn btn-danger mt-4" type="submit" />
        </Form>
      </div>
    </section>
  );
};

export default Appointment;
