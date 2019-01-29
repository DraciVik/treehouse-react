import React, { Component } from "react";
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
      <Counter score={props.score} />
    </div>
  );
};

const Counter = props => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={5} />

      {/* Players List */}
      <Player name="Viktor" score={50} />
      <Player name="Slagjana" score={69} />
      <Player name="Nikola" score={1} />
      <Player name="Borce" score={0} />
    </div>
  );
};

export default App;
