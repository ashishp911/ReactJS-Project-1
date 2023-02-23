import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem.js";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import Payments from "./components/Payments";

function App() {
  const products = [
    {
      name: "Iphone 14 pro max",
      price: 99999,
      quantity: 0,
    },
    {
      name: "Redmi 14 pro",
      price: 9999,
      quantity: 0,
    },
  ];
  // To use setState in a functional component, we use state hook.
  const [productList, setProductList] = useState(products);
  // update total amount for footer
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    // Make sure that the value after decrementing is not less than 0,
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    } else {
      newProductList[index].quantity = 0;
    }
    // newProductList[index].quantity > 0 ? newProductList[index].quantity-- :  newProductList[index].quantity = 0
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((productList) => {
      productList.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };


  return (
    <>
      <Router>
        <Navbar />
        <main className="container mt-5">
          <Routes>
            <Route
              exact
              path="/"
              element={[
                <AddItem addItem={addItem} />,
                <ProductList
                  productList={productList}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  removeItem={removeItem}
                />,
              ]}
            />
            <Route
              exact
              path="/payment"
              element={<Payments totalAmount={totalAmount} />}
            />
          </Routes>
        </main>

        <Footer
          totalAmount={totalAmount}
          resetQuantity={resetQuantity}
        />
      </Router>
    </>
  );
}

export default App;


