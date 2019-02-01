import React, { Component } from "react";

class AddPlayerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      value: ""
    };
  }

  handleValueChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault(); // Prevent default form act
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" }); // This clears the text input field
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
