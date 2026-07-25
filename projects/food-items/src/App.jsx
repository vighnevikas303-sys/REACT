import Heading from "./Heading";
import Items from "./Items";
import Container from "./Container";
import "./Style.css";

function App() {
    const foodItems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
  return <>

    <Container >
      <Heading />
      <Items item={foodItems} />
    </Container >
    {/* <Container >
      <p>this is the second container i just try how it was works</p>
    </Container> */}
  </>
}

export default App;