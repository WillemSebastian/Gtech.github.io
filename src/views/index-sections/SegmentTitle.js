import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SegmentTitle(props) {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">{props.text}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SegmentTitle;
