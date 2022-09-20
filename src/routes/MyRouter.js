import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import About from '../Pages/About'
import CartPages from '../Pages/CartPages'
import CheckOutPage from '../Pages/CheckOutPage'
import Contact from '../Pages/Contact'
import FAQ from '../Pages/FAQ'
import Home from '../Pages/Home'
import NewsPages from '../Pages/NewsPages'
import ProductDetail from '../Pages/ProductDetail'
import WishListPages from '../Pages/WishListPages'
import Account from '../components/Account/Account'
import Shop from '../components/Shop/Shop'



const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/news' element={<NewsPages />} />
      <Route path='/wishlist' element={<WishListPages />} />
      <Route path='/cart' element={<CartPages />} />
      <Route path='/checkout' element={<CheckOutPage />}/>
      <Route path='/account' element={<Account />} />
      <Route path='/shop' element={<Shop />} />

    </Routes>
  )
}

export default MyRouter 