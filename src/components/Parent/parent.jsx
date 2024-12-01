import React, { Component } from "react";
import Child from "../Child/child";
class Parent extends Component {
  render() {
    return (
      <div>
        <div className="my-5">
          <div className="container">
            <div className="row">
             {this.props.products.map((product) =><Child productDetails={product} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;
