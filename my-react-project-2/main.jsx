// main.jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  rev(ev) {
    this.setState({
      name: ev.target.value
    });
  }

  render() {
    return (
      <div>
        My name is&nbsp;
        <input value={this.state.name} onChange={this.rev.bind(this)} />
        &nbsp;and in reverse it is&nbsp;
        {this.state.name
          .split("")
          .reverse()
          .join("")}
      </div>
    );
  }
}

const app = document.createElement("div");
document.body.appendChild(app);
ReactDOM.render(<App />, app);
