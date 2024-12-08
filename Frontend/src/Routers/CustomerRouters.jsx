import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Navigation from '../customer/component/Navigation/Navigation'
import Product from '../customer/component/Product/Product'
import Footer from '../customer/component/Footer/Footer'
import ProductDetails from '../customer/component/ProductDetails/ProductDetails'
import Cart from '../customer/component/Cart/Cart'
import Checkout from '../customer/component/Checkout/Checkout'
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
            <Route>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
               

                 
       
    
        
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
            </Route>
        </Routes>

        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters
