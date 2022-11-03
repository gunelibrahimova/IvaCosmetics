import React from 'react'
import './header.scss'
import ScrollToTop from "react-scroll-to-top";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, logoutUserAction } from '../../redux/Actions/UserAction';
import { useState } from 'react';
import { useEffect } from 'react';
import { FILE_PATH } from '../../api/config';
import SideBar from '../sidebar'


const Header = () => {
  const { userInfo } = useSelector((state) => state.user)
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logoutUserAction())
    navigate("/")
  }


  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    countTotal();
    dispatch(getUserAction());
  }, [totalPrice, cartItems]);


  return (
    <div id='navbar'>
      <div className="side">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"header"} />
      </div>
      <div id='header'>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-2 res-image">
              <Link to="/">
                <img src="https://dtiva.wpengine.com/wp-content/uploads/2020/04/logo.png" alt="" />

              </Link>
            </div>
            <div className="col-lg-5 res-header">
              <ul className='list-unstyled d-flex'>
                <li className='first'><Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li><Link to="/">Collection</Link> </li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 d-flex top-search">
              <div className="search d-flex">
                <input type="text" placeholder='Axtarış..' />
                <div className="search-button">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>

            </div>
            <div className="col-lg-2 res-icon">
              <div className="user d-flex align-items-center">
                <div className="hoverBox">
                  <Link to="/auth"><i class="fa-solid fa-user"></i></Link>
                  <div className="hoverTextBox">

                    {
                      userInfo.length === 0 ? (
                        <>
                          <span className="text">Daha yaxşı təkliflər üçün hesabınıza giriş edin.</span>
                          <hr />
                          <div className="buttonBox">
                            <button><Link to="/auth">
                              Giriş
                            </Link>
                            </button>
                          </div><div className="buttonBoxx">
                            <button>
                              <Link to="/auth">
                                Qeydiyyat
                              </Link>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p>{userInfo.name}</p>
                          <p className="text">Siz artıq hesaba daxil olmusunuz.</p>
                          <hr />
                          <div className="buttonBox">
                            <button><Link to="/account">
                              Hesabım
                            </Link>
                            </button>
                          </div>
                          <div className="buttonBox">
                            <button onClick={() => logOut()}>Logout</button>
                          </div>
                        </>
                      )
                    }
                  </div>
                </div>
                <div className="cart">
                  <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                  <div className="box">
                    <div className="top">
                      <span className="header6">Your Cart </span>
                    </div>
                    <hr />
                    <div className="center">
                      <div className="row">
                        {
                          cartItems.map((product) => (
                            <>
                              <div className="col-lg-4">
                                <img
                                  width="100%"
                                  src={`${FILE_PATH}${product.img}`}
                                  alt=""
                                />
                              </div>
                              <div className="col-lg-8">
                                <div className="row align-items-center justify-content-between">
                                  <div className="col-lg-10">
                                    <h6 className="samsung">
                                      {product.name}
                                    </h6>
                                    <p className="price">£{product.price}</p>
                                    <p className="price">Quantity:  {product.quantity}</p>
                                  </div>
                                  <div className="col-lg-2">
                                    <i class="fa-solid fa-x"></i>
                                  </div>
                                </div>
                              </div>
                            </>

                          ))
                        }
                      </div>




                    </div>
                    <hr />
                    <div className="bottom">
                      <div className="text">
                        <div className="row">
                          <div className="col-lg-6">
                            <span className="total">Subtotal</span>
                          </div>
                          <div className="col-lg-6">
                            <span className="money">${totalPrice}</span>
                          </div>
                        </div>
                      </div>
                      <div className="buttonDiv">
                        <button className="view">
                          <Link to="/cart">View cart</Link>
                        </button>
                        <br />
                        <button className="check">
                          <Link to="/checkout">CHECKOUT</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/wishlist"><i class="fa-solid fa-heart"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop smooth />
      </div>
    </div>

  )
}

export default Header