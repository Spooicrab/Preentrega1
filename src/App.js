import { Component } from "react";
import "./App.css";
import NavPrueba from "./Components/navbar/navbar";
import ItemLIstContainer from "./Components/ItemListContainer/ItemLIstContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavPrueba />
        <ItemLIstContainer />
      </div>
    );
  }
}

export default App;
