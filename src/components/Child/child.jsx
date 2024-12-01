import React, { Component } from 'react'

 class Child extends Component {
    state={}
  render() {
    let{ProductId, ProductName, ProductPrice, ProductCount}=this.props.productDetails;
    return (
      <div className='col-lg-4'>
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product ID:{ProductId}</h5>
              <h5 className="card-title">Product Name: {ProductName}</h5>
              <h5 className="card-title">Product Price:{ProductPrice}</h5>
              <h5 className="card-title">Product Count:{ProductCount}</h5>
            </div>
          </div>
        </div>
    )
  }
}
export default Child