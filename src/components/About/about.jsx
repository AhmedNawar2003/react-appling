import React, { Component } from "react";

class About extends Component {
    state = {
        message: "Welcome to About Page",
      };
  render() {
    return (
      <div>
        <h1>About {this.state.message}</h1>
        
     </div>
    );
  }
}
export default About;
