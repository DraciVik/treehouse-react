import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string,
    index: PropTypes.number,
    score: PropTypes.number,
    id: PropTypes.number
  };

  render() {
    const { name, removePlayer, score, index, changeScore, id } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            x
          </button>
          {name}
        </span>
        <Counter index={index} changeScore={changeScore} score={score} />
      </div>
    );
  }
}

export default Player;
