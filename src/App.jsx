import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["karachi", "hyderabad", "sukkur", "larkana", "lahore"];
  const handleSelectItem = (city) => {
    console.log(city);
  };
  return (
    <div className="App">
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button color="success" onclick={() => console.log("Clicked")}>
        Submit
      </Button>
      {/* <Alert>Login Successfull</Alert> */}
    </div>
  );
}

export default App;
