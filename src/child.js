import React, { Component } from "react";

export class child extends Component {
  render() {
    return (
      <div style={{color: `${this.props.data.color}`}}>
      CHILD
      <br />
        <br />
        {console.log("childinfo: " + this.props.data.color)}
        <button onClick={() => this.props.data.changeColor("lime")}>
          click
        </button>
      </div>
    );
  }
}

export default child;
