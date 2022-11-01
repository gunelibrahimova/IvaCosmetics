import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FILE_PATH } from '../../api/config';
// import { CartContext } from '../../context/MyContext';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { removeFromFavories } from '../../redux/Actions/FavoriesAction';
import { getUserAction } from '../../redux/Actions/UserAction';
import "./wishlist.scss"

const WishList = () => {
  const { favoriesItems } = useSelector((state) => state.favories);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  // const {cartCount,setCartCount} = useContext(CartContext);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const countTotal = () => {
    var price = 0;
    favoriesItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const removeFromFavoriesHandler = (id) => {
    dispach(removeFromFavories(id));
  }


  const addToCartHadler = (id, name) => {
    var myCart = cartItems.find(e => e.id === id)
    if (myCart) {
      dispach(addToCartAction(id, myCart.quantity + 1))
    } else {
      dispach(addToCartAction(id, 1))
    }
    // setCartCount(cartCount+1);
  }

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, favoriesItems]);

  return (
    <div id="wishlist">

      <div className="top">
        <div className="image">
          <img width="100%" src="http://dtiva.wpengine.com/wp-content/uploads/2020/05/breadcrumb-1.jpg" alt="" />
        </div>
        <div className="text">
          <h1>News</h1>
          <p>Home - News</p>
        </div>
      </div>

      <div className="container">
        <h3>My wishlist</h3>
        <div className="container">
          <div className="top">
            <table>
              <tr>
                <th>Photo</th>
                <th>Product Name</th>
                <th className='dnone'>Price</th>
                {/* <th>Hərəkət</th> */}
              </tr>

              {favoriesItems.length > 0
                ? favoriesItems.map((product) => (
                  <tr>
                    <td>
                      <img width="80px" src={`${FILE_PATH}${product.img}`} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td className='dnone'>{product.price}₼</td>
                    <td>
                      <div className="d-flex">
                        <div className="icon">
                          <i class="fa fa-shopping-cart" onClick={() => addToCartHadler(product.id, product.name)}></i>
                        </div>
                        <div className="icon1" onClick={() => removeFromFavoriesHandler(product.product)}>
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </td>

                  </tr>
                ))
                : "No products added to the wishlist"
              }
            </table>
          </div>

          <div className="bottom">
            <div className="container">
              <div className="bottom">
                <div className="row">
                  <div className="col-lg-9">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="shoppingButton">
                        Continue to shopping
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default WishList