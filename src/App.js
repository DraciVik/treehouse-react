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
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          x
        </button>
        {props.name}
      </span>
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "Viktor",
          id: 1
        },
        {
          name: "Slagjana",
          id: 2
        },
        {
          name: "Nikola",
          id: 3
        },
        {
          name: "Borce",
          id: 4
        }
      ]
    };
  }
  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players List */}
        {this.state.players.map(player => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
