import React, { Component } from "react";
import Child from "../Child/child";
class Parent extends Component {
  render() {
    return (
      <div>
        <div className="my-5">
          <div className="container">
            <div className="row">
              
             {this.props.products.filter((product) => product.onSale).map((product,index) =><Child key={index} productDetails={product} Delete={this.props.delete} />)}
             {this.props.products.filter((product) => !product.onSale).map((product,index) =><Child key={index} productDetails={product} Delete={this.props.delete} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;
