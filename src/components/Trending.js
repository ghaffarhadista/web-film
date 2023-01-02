import { Container, Row, Col, Card, Image } from "react-bootstrap";
import yof from "../assets/img/yofk.jpg";
import tensura from "../assets/img/tensura.jpg";
import mob from "../assets/img/mob.jpg";
import jjk from "../assets/img/jjk.jpg";
import cyber from "../assets/img/cyber.jpg";
import mha from "../assets/img/mha.png";

const Trending = () => {
  return (
    <div>
      <Container className="mb-4">
        <Row id="trending">
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark text-center movieImage mt-3">
              <Image src={yof} alt="Yofukashi" className="images" />
              <Card.Title className="mt-2">Yofukashi No Uta</Card.Title>
              <Card.Text className="mb-2">2022</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark text-center movieImage mt-3">
              <Image src={tensura} alt="Yofukashi" className="images" />
              <Card.Title className="mt-2">Reincarnate as Slime</Card.Title>
              <Card.Text className="mb-2">2021</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark text-center movieImage mt-3">
              <Image src={mob} alt="Yofukashi" className="images" />
              <Card.Title className="mt-2">Mob Psycho</Card.Title>
              <Card.Text className="mb-2">2022</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark text-center movieImage mt-3">
              <Image src={jjk} alt="Yofukashi" className="images" />
              <Card.Title className="mt-2">Jujutsu Kaisen</Card.Title>
              <Card.Text className="mb-2">2020</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark text-center movieImage mt-3">
              <Image src={cyber} alt="Yofukashi" className="images" />
              <Card.Title className="mt-2">Cyberpunk Edgerunner</Card.Title>
              <Card.Text className="mb-2">2022</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark text-center movieImage mt-3">
              <Image src={mha} alt="Yofukashi" className="images" />
              <Card.Title className="mt-2">Boku No Hero Academia</Card.Title>
              <Card.Text className="mb-2">2022</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
