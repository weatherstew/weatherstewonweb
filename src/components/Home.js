import { Container, Image } from "react-bootstrap";

const wsLogoImg = 'logo_single_animation.gif'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
    <>
      <Container fluid className="d-flex flex-column justify-content-center">
		<h1 className="mx-auto">weatherstew</h1>
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
}

export default Home
