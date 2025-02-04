import { Container, Image } from "react-bootstrap";

const wsLogoImg = "logo_single_animation.gif";

const About = (props) => {
  // const { msgAlert, user } = props
  console.log("props in about", props);

  return (
    <>
      <Container fluid className="d-flex flex-column justify-content-center">
        <h2 className="mx-auto">about</h2>
        <Image
          fluid
          src={wsLogoImg}
          style={{
            maxHeight: "75vh", // Set maximum height to viewport height
            objectFit: "contain", // Maintain aspect ratio while fitting within the height
          }}
        />
      </Container>
    </>
  );
};

export default About;
