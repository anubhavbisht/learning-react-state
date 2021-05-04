import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message.js";
import Counter from "./Counter.js";
const App = () => {
  return (
    <div>
      <p>Hello I am learning react states</p>
      <Message text="thanks for subscribing" />
      <Counter />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
