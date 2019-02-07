import React, { Component } from "react";
import Header from "./Header";
import { Provider } from "./Context";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

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
  //

  // player id counter
  prevPlayerId = 4;

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

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1)
          }
        ]
      };
    });
  };
  getHighScore = () => {
    const scores = this.state.players.map(player => player.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      //if highScore is bigger than 0 it returns true
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />
          {/* Players List */}
          <PlayerList
            players={this.state.players}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
