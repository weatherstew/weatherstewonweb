import { Container, Image, Card } from "react-bootstrap";

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
      </Container>
    </>
  );
};

export default About;
