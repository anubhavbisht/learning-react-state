import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  change() {
    if (this.state.message.includes("Welcome Visitor")) {
      this.setState({
        message: "Thanks for subscribing",
      });
    } else {
      this.setState({
        message: "Welcome Visitor",
      });
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.change()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
