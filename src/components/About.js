import { Container, Image, Card, Row, Col } from "react-bootstrap";

const wsLogoImg = "logo_single_animation.gif";

const About = (props) => {
  // const { msgAlert, user } = props
  console.log("props in about", props);

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center mt-10"
        style={{ height: "75vh", marginTop: "200px"}}
      >
        <h1 className="my-10">about</h1>
        <Card className="w-50" >
          <Card.Body>
            <Card.Text className="text-center">
              We're weatherstew, an indie game studio dedicated to making fun
              and relaxing games that we would want to play ourselves, which
              means you can count on seeing lots of cute characters, wholesome
              themes, bright happy colors, and whimsical sound effects!
            </Card.Text>
            <Card.Text className="text-center">
              It also means NO ADS EVER!
            </Card.Text>
            <Card.Text className="text-center">
              Baby, you got a stew goin'!
            </Card.Text>
          </Card.Body>
        </Card>
        <Image
          fluid
          src={wsLogoImg}
          style={{
            maxHeight: "75vh", // Set maximum height to viewport height
            height: "60%",
            objectFit: "contain", // Maintain aspect ratio while fitting within the height
          }}
        />
        <Row className="justify-content-center mt-4">
          <Col xs={12} className="text-center">
            <p>
              <a href="/privacy-policy" className="text-decoration-none">Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
