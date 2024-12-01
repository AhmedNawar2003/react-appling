import React, { Component } from "react";

class Child extends Component {
  state = {};
  render() {
    let { ProductId, ProductName, ProductPrice, ProductCount, onSale } =
      this.props.productDetails;
    return (
      <div className="col-lg-4">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Product ID:{ProductId}</h5>
            <h5 className="card-title">Product Name: {ProductName}</h5>
            <h5 className="card-title">Product Price:{ProductPrice}</h5>
            <h5 className="card-title">Product Count:{ProductCount}</h5>
            {onSale ? (
              <h5 className="bg-danger position-absolute top-0 end-0 p-2 text-light">
                Sale
              </h5>
            ) : null}
            <button className="btn btn-outline-info w-100">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Child;
