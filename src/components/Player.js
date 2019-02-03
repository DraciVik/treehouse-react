import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
  render() {
    console.log(this.props.name);
    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => this.props.removePlayer(this.props.id)}
          >
            x
          </button>
          {this.props.name}
        </span>
        <Counter
          index={this.props.index}
          changeScore={this.props.changeScore}
          score={this.props.score}
        />
      </div>
    );
  }
}

export default Player;
