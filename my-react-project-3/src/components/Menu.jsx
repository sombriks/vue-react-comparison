import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.settings.name}</h2> |
        <Link to={"/home"}>Home</Link> |
        <Link to={"/about"}>About</Link> |
        <Link to={"/settings"}>Settings</Link>
      </div>
    );
  }
}

const mapState = state => ({ settings: state.settings });

export default connect(mapState)(Menu);
