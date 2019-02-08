import React from "react";
import Player from "./Player";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const PlayerList = props => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          {context.map((player, index) => (
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              changeScore={props.changeScore}
              removePlayer={props.removePlayer}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};
PlayerList.propTypes = {
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequred
};

export default PlayerList;
