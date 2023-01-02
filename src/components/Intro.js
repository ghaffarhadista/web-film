import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-center text-white d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title fw-bold">Free Streaming Movies and Series</div>
            <div className="introButton mt-4">
              <Button className="btn-info">Ikuzo!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
