import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/Product/Product';
import ProductDetails from './customer/component/ProductDetails/ProductDetails'

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        <ProductDetails/>

      
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
