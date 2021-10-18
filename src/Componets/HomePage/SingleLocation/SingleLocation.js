import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleLocation = (props) => {
  const { name, photo, addres, number, website } = props.data;
  console.log(props.data);
  return (
    <Col>
      <Card className="border-0  h-100 shadow p-3">
        <Card.Img height="250" variant="top" src={photo} />
        <Card.Body>
          <Card.Title className="text-primary">
            Medicare Health Center in {name}
          </Card.Title>
          <Card.Text>
            <span className="text-danger">Our Location</span> :{addres}
          </Card.Text>
          <Card.Text>
            <span className="text-danger">Phone Number : </span> {number}
          </Card.Text>
          <Card.Text>
            <span className="text-danger">Our Website : </span>
            <span className="text-primary cursor-pointor text-decoration-underline">
              {website}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleLocation;
