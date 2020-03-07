import React, { Component } from "react";

// This.setState() is Asynchrous
// When a function is Passed to this.setState it plays through each of them
// Increment Shows Logic with setState()
// This.state() takes 2 arguments one being the object or the function, the other is a function it will call after it has updated the state
// This is the callback function in increment

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(
      state => {
        if (state.count >= 5) return;
        return { count: state.count + 1 };
      },
      () => {
        console.log("After State Change", this.state);
      }
    );
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>reset</button>
        </section>
      </div>
    );
  }
}
export default Counter;
