import { Container, Image } from "react-bootstrap";

// const wsLogoImg = "logo_single_animation.gif";
const fartAscent = "app_icon_new.png";

const Games = (props) => {
  // const { msgAlert, user } = props
  console.log("props in games", props);

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center my-3"
        style={{ height: "75vh" }}
      >
        <h1 className="mx-auto">games</h1>
        <h6 className="mx-auto"> big things, coming soon... </h6>
        <Image
          fluid
          src={fartAscent}
          alt="logo for our mobile game Fart Ascent"
          style={{
            maxHeight: "75vh", // Set maximum height to viewport height
            height: "75%",
            objectFit: "contain", // Maintain aspect ratio while fitting within the height
          }}
        />
      </Container>
    </>
  );
};

export default Games;
