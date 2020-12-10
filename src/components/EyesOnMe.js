// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  handleFocus = () => console.log("Good!");
  onBlur = () => console.log("Hey! Eyes on me!");
  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    );
  }
}

export default EyesOnMe;
