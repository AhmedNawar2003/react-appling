import { Component } from "react";
import Parent from "./components/Parent/parent";
class App extends Component {
  state = {
    allProducts: [
      {
        ProductName: "Iphone 11",
        ProductId: 1,
        ProductPrice: 500,
        ProductCount: 5,
        onSale: true,
      },
      {
        ProductName: "Iphone 12",
        ProductId: 2,
        ProductPrice: 5000,
        ProductCount: 6,
        onSale: false,
      },
      {
        ProductName: "Iphone 13",
        ProductId: 3,
        ProductPrice: 10000,
        ProductCount: 7,
        onSale: true,
      },
      {
        ProductName: "Iphone 14",
        ProductId: 4,
        ProductPrice: 15000,
        ProductCount: 8,
        onSale: false,
      },
      {
        ProductName: "Iphone 15",
        ProductId: 5,
        ProductPrice: 30000,
        ProductCount: 9,
        onSale: true,
      },
      {
        ProductName: "Iphone 16",
        ProductId: 6,
        ProductPrice: 50000,
        ProductCount: 10,
        onSale: false,
      },
    ],
  };
  deleteProduct = (prId) => {
    let newProducts = [...this.state.allProducts];
    newProducts = newProducts.filter(
      (product) => product.ProductId !== prId
    );
    this.setState({ allProducts: newProducts });
  };

  incrementProduct = (prId) => {
    const newProducts = [...this.state.allProducts];
    const productIndex = newProducts.findIndex(
      (product) => product.ProductId === prId
    );
    if (productIndex !== -1) {
      newProducts[productIndex].ProductCount++;
      this.setState({ allProducts: newProducts });
    }
  };

  decrementProduct = (prId) => {
    let newProducts = [...this.state.allProducts];
    const productIndex = newProducts.findIndex(
      (product) => product.ProductId === prId
    );
    if (productIndex !== -1) {
      if (newProducts[productIndex].ProductCount <= 1) {
        newProducts = newProducts.filter(
          (product) => product.ProductId !== prId
        );
      } else {
        newProducts[productIndex].ProductCount--;
      }
      this.setState({ allProducts: newProducts });
    }
  };

  render() {
    return (
      <div>
        <Parent
          products={this.state.allProducts}
          delete={this.deleteProduct}
          increment={this.incrementProduct}
          decrement={this.decrementProduct}
        />
      </div>
    );
  }
}

export default App;
