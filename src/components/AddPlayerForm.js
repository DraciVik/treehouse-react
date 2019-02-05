import React, { Component } from "react";
import PropTypes from "prop-types";

class AddPlayerForm extends Component {
  static propTypes = {
    addPlayer: PropTypes.func
  };
  playerInput = React.createRef();

  handleSubmit = e => {
    const { addPlayer } = this.props;

    e.preventDefault(); // Prevent default form act
    addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.playerInput}
          type="text"
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
