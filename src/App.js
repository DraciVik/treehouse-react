import React from "react";
import "./App.css";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = props => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }
  // If it's not an arrow function the "this" method references increment score.
  // When it's an arrow function like here this belongs to the parent component - the Counter class
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  //Same for this method
  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  };

  render() {
    return (
      <div className="counter">
        <button
          onClick={this.decrementScore}
          className="counter-action decrement"
        >
          {" "}
          -{" "}
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

const App = props => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* Players List */}
      {props.initialPlayers.map(player => (
        <Player name={player.name} key={player.id.toString()} />
      ))}
    </div>
  );
};

export default App;
