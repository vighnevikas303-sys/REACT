import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(true);
  }

  return (
    <>
      <button onClick={handleClick}>Show</button>

      {show && <h1>Welcome to React</h1>}
    </>
  );
}

export default App;