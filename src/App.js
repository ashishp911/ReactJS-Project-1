import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js'
function App() {
  const productList = [
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
  return (
    <>
    <Navbar />
    <main className='container mt-5'>
      <ProductList productList = {productList} />
    </main>
    {/* <Footer /> */}
    </>
  );
}

export default App;
