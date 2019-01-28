import React, { Component } from "react";
import "./App.css";

const desc = "I just learned stuff";
const myTitleID = "main-title";
const name = "Guil";

const header = (
  <header>
    <h1 id={myTitleID}>{name}'s First React Element!</h1>
    <p>{desc}</p>
  </header>
);

export default App;
