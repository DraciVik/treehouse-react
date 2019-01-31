import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "Viktor",
          id: 1,
          score: 0
        },
        {
          name: "Slagjana",
          id: 2,
          score: 0
        },
        {
          name: "Nikola",
          id: 3,
          score: 0
        },
        {
          name: "Borce",
          id: 4,
          score: 0
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
  //   If it's not an arrow function the "this" method references increment score.
  // When it's an arrow function like here this belongs to the parent component - the Counter class
  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      // prevState is used so that the state is updated before using the callback and modify it
      return {
        // setState doesn't guarantee that state will be updated at once. Thats why we use prevState
        score: (prevState.players[index].score += delta)
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players List */}
        {this.state.players.map((player, index) => (
          <Player
            changeScore={this.handleScoreChange}
            score={player.score}
            name={player.name}
            id={player.id}
            index={index}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
