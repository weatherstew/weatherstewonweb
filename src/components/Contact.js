import { Container, Image, ListGroup } from "react-bootstrap";

const wsLogoImg = "logo_single_animation.gif";

const Contact = (props) => {
  // const { msgAlert, user } = props
  console.log("props in games", props);

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center my-5"
        style={{ height: "75vh", maxHeight: "75%" }}
      >
        <h1>contact us</h1>
        <ListGroup className="w-50" flush>
          <ListGroup.Item
            action
            href="https://www.youtube.com/@weatherstew"
            target="_blank"
            variant="info"
          >
            Check us out on YouTube!
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://x.com/weatherstewtimm"
            target="_blank"
            variant="info"
          >
            Follow us on X
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://github.com/weatherstew/"
            target="_blank"
            variant="info"
          >
            Here is our GitHub
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://www.reddit.com/user/weatherstew/"
            target="_blank"
            variant="info"
          >
            We're also on Reddit
          </ListGroup.Item>
        </ListGroup>
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

export default Contact;
