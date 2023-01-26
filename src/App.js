import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js'
import Footer from './components/footer.js'



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
  ]
  // To use setState in a functional component, we use state hook.
  const [productList, setProductList] = useState(products);
  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    // Make sure that the value after decrementing is not less than 0, 
    let newProductList = [...productList]
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- :  newProductList[index].quantity = 0
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar />
    <main className='container mt-5'>
      <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity}/>
    </main>
    <Footer />
    </>
  );
}

export default App;
