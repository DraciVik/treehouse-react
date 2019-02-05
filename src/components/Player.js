import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Crown from "./Crown";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string,
    index: PropTypes.number,
    score: PropTypes.number,
    id: PropTypes.number,
    scoreArr: PropTypes.array,
    isHighScore: PropTypes.bool
  };

  render() {
    const { name, removePlayer, score, index, changeScore, id } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            x
          </button>
          <Crown isHighScore={this.props.isHighScore} />
          {name}
        </span>
        <Counter index={index} changeScore={changeScore} score={score} />
      </div>
    );
  }
}

export default Player;
