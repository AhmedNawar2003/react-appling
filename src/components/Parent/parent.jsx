import React, { Component } from "react";
import Child from "../Child/child";
class Parent extends Component {
  state = {
    product: {
      ProductName: "Iphone 16",
      ProductId: 1,
      ProductPrice: 500,
      ProductCount: 100,
    },
  };
  render() {
    return (
      <div>
        <div className="my-5">
          <div className="container">
            <div className="row">
              <Child productDetails={this.state.product} />
              <Child productDetails={this.state.product} />
              <Child productDetails={this.state.product} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;
