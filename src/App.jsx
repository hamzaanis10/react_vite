import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  let cities = ["karachi", "hyderabad", "sukkur", "larkana", "lahore"];
  const handleSelectItem = (city) => {
    console.log(city);
  };

  return (
    <div className="App">
      {/* <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Login Successfull</Alert>
      )}
      <Button color="success" onclick={() => setShowAlert(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
