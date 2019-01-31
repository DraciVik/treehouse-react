import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }
  // If it's not an arrow function the "this" method references increment score.
  // When it's an arrow function like here this belongs to the parent component - the Counter class
  incrementScore = () => {
    this.setState(prevState => {
      // prevState is used so that the state is updated before using the callback and modify it
      return {
        // setState doesn't guarantee that state will be updated at once. Thats why we use prevState
        score: prevState.score + 1
      };
    });
  };

  //Same for this method
  decrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <button
          onClick={this.decrementScore}
          className="counter-action decrement"
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          onClick={this.incrementScore}
          className="counter-action increment"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
