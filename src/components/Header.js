import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = () => {
  return (
    <header>
      <Stats />
      <h1>SCOREBOARD</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
