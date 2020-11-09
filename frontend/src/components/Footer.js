import React from 'react';

// react Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            samdz - &copy; 2020
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
