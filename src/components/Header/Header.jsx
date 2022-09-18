import React from 'react'
import './header.scss'
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="row justify-content-center align-items-center">
               <div className="col-lg-2">
                <img src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/logo.png" alt="" />
               </div>
               <div className="col-lg-5">
                <ul className='list-unstyled d-flex'>
                  <li className='first'><Link to="/">Home</Link> </li>
                  <li> <Link to="/about">About</Link> </li>
                  <li><Link to="/">Collection</Link> </li>
                  <li><Link to="/">Shop</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/news">News</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
               </div>
               <div className="col-lg-3 d-flex">
                <div className="search d-flex">
                  <input type="text" placeholder='Axtarış..'/>
                  <div className="search-button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
               
               </div>
               <div className="col-lg-2">
               <div className="user ">
                <Link to="/auth"><i class="fa-solid fa-user"></i></Link>
                
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-heart"></i>
                </div>
               </div>
            </div>
        </div>
        <ScrollToTop smooth />
    </div>
  )
}

export default Header