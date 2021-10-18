import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { photo, name, shortDescription, key } = props.data;
  return (
    <Col>
      <Card className="h-100 border-0 text-center shadow-lg">
        <Card.Img height="350" variant="top" src={photo} />
        <Card.Body>
          <Card.Title className="cursor-pointor text-primary">
            {name}
          </Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-light">
          <Link to={`/service/${key}`}>
            <button className="btn btn-danger">See More</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleService;
