import { Component } from "react";
import "./App.css";
import NavPrueba from "./Components/navbar/navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavPrueba />
        <ItemListContainer greeting="Hola Bootstrap" />
      </div>
    );
  }
}

export default App;
