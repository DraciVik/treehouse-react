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
