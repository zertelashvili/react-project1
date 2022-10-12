import { useState } from "react";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";

function App() {
  const [rate, setRate] = useState(null)
  const [visable, setvisable] = useState(false)
  function submit() {
    if (rate !== null) {
      setvisable(true)
    }
  }
  return (
    <>

      {!visable && <Card submit={submit} rate={setRate} />}
      {visable && <Card2 rate={rate} />}

    </>
  );
}

export default App;
