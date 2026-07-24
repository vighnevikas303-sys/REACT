import Heading from "./Heading";
import Items from "./Items";
import Container from "./Container";
import "./Style.css";

function App() {
  return <>

    <Container >
      <Heading />
      <Items />
    </Container >
    <Container >
      <p>this is the second container i just try how it was works</p>
    </Container>
  </>
}

export default App;