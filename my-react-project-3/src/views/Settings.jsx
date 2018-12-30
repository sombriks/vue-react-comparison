import React, { Component } from "react";

import { connect } from "react-redux";

class Settings extends Component {
  state = { name: this.props.settings.name };

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <p>This is Settings page</p>
        My name is{" "}
        <input
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={e => this.props.changeName(this.state.name)}>Change</button>
      </div>
    );
  }
}

const mapState = state => ({ settings: state.settings });
const mapDispatch = dispatch => {
  return {
    changeName(name) {
      dispatch({ type: "setName", name });
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Settings);
