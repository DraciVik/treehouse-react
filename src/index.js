import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const players = [
  {
    name: "Viktor",
    score: 50,
    id: 1
  },
  {
    name: "Slagjana",
    score: 69,
    id: 2
  },
  {
    name: "Nikola",
    score: 1,
    id: 3
  },
  {
    name: "Borce",
    score: 0,
    id: 4
  }
];
ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
