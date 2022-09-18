import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import FAQ from '../Pages/FAQ'
import Home from '../Pages/Home'
import NewsPages from '../Pages/NewsPages'
import ProductDetail from '../Pages/ProductDetail'
import WishListPages from '../Pages/WishListPages'


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/productdetail' element={<ProductDetail />} />
      <Route path='/news' element={<NewsPages />} />
      <Route path='/wishlist' element={<WishListPages />} />
    </Routes>
  )
}

export default MyRouter 