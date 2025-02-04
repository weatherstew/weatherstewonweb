import { Container, Image } from "react-bootstrap";

const wsLogoImg = "logo_single_animation.gif";

const Games = (props) => {
  // const { msgAlert, user } = props
  console.log("props in games", props);

  return (
    <>
        <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="mx-auto">games</h2>
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

export default Games;
