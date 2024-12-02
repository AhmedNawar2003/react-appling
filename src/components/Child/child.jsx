import React, { Component } from "react";
import "./child.css"
class Child extends Component {
  render() {
    let { ProductId, ProductName, ProductPrice, ProductCount, onSale } =
      this.props.productDetails;
    return (
      <div className="col-lg-4">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title id"><span>Product ID :</span> {ProductId}</h5>
            <h5 className="card-title name"><span>Product Name :</span> {ProductName}</h5>
            <h5 className="card-title price"><span>Product Price :</span> {ProductPrice}</h5>
            <h5 className="card-title count"><span>Product Count :</span> {ProductCount}</h5>
            {onSale ? (
              <h5 className="sale">
                Sale
              </h5>
            ) : null}
            <button
              onClick={() => {
                this.props.Delete(ProductId);
              }}
              className="btn btn-outline-info w-100 my-3"
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.props.increment(ProductId);
              }}
              className="btn btn-outline-primary w-100 my-3"
            >
              +
            </button>
            <button
              onClick={() => {
                this.props.decrement(ProductId);
              }}
              className="btn btn-outline-success w-100 my-3"
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Child;
