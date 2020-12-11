import React, { Component } from "react";
import Child from "./child";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  changecolor(item) {
    this.setState({ color: item });
  }
  // const color = {state.color}
  render() {
    return (
      <div style={{ color: `${this.state.color}` }}>
        PARENT
        <br />
        <br />
        {console.log("parentinfo: " + this.state.color)}
        <Child
          data={{
            color: this.state.color,
            changeColor: this.changecolor.bind(this)
          }}
        />
      </div>
    );
  }
}

export default App;
