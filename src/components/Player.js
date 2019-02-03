import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
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
