import React from "react";
import Player from "./Player";

const PlayerList = props => {
  return (
    <React.Fragment>
      {props.players.map((player, index) => (
        <Player
          {...player}
          key={player.id.toString()}
          index={index}
          changeScore={props.changeScore}
          removePlayer={props.removePlayer}
        />
      ))}
    </React.Fragment>
  );
};

export default PlayerList;
