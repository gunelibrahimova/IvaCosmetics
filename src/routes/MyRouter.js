import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import FAQ from '../Pages/FAQ'
import Home from '../Pages/Home'


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default MyRouter 