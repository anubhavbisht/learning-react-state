import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increase() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value of count", this.state.count);
    //   }
    // );
    // console.log("Due to async nature of count", this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  increasefive() {
    this.increase();
    this.increase();
    this.increase();
    this.increase();
    this.increase();
  }
  render() {
    return (
      <div>
        <div>Count is ::{this.state.count}</div>
        <button onClick={() => this.increasefive()}>increament</button>
      </div>
    );
  }
}
export default Counter;
