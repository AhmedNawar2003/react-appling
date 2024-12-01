import React, { Component } from "react";
import Child from "../Child/child";
class Parent extends Component {
  state = {
    allProducts: [{
      ProductName: "Iphone 11",
      ProductId: 1,
      ProductPrice: 500,
      ProductCount: 5,
      onSale:true,
    },
    {
      ProductName: "Iphone 12",
      ProductId: 2,
      ProductPrice: 5000,
      ProductCount: 6,
      onSale:false,
    },
    {
      ProductName: "Iphone 13",
      ProductId: 3,
      ProductPrice: 10000,
      ProductCount: 7,
      onSale:true,
    },
    {
      ProductName: "Iphone 14",
      ProductId: 1,
      ProductPrice: 15000,
      ProductCount: 8,
      onSale:false,
    },
    {
      ProductName: "Iphone 15",
      ProductId: 1,
      ProductPrice: 30000,
      ProductCount: 9,
      onSale:true,
    },
    {
      ProductName: "Iphone 16",
      ProductId: 1,
      ProductPrice: 50000,
      ProductCount: 10,
      onSale:false, 
    },
  ]
  };
  render() {
    let {allProducts} = this.state;
    return (
      <div>
        <div className="my-5">
          <div className="container">
            <div className="row">
             {allProducts.map((product) =><Child productDetails={product} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;
