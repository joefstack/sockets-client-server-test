import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001"
    };
  }
  // sending sockets
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("button clicked", { button: "clicked on react client" });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Send Test</button>
      </div>
    );
  }
}
export default App;
