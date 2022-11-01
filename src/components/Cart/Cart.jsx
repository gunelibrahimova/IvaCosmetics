import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './cart.scss'
import Swal from "sweetalert2";
import { removeAllCartAction } from "../../redux/Actions/CartAction";
import { getUserAction } from "../../redux/Actions/UserAction";
import { CheckOutAction } from "./../../redux/Actions/CheckOutAction";
import { Link, useNavigate } from "react-router-dom";
import { FILE_PATH } from "../../api/config";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);


  const addOrder = () => {
    if (userInfo.length !== 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Sifarisi tamamlamaq istediyinizden eminsiniz?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sifarisi tamamla",
          cancelButtonText: "Legv et!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (cartItems.length > 0) {
              dispach(CheckOutAction(userInfo.id));
              dispach(removeAllCartAction());
              navigate("/checkout");
            }
            else {
              Swal.fire("Səbətiniz boşdur.");
              navigate("/cart");
            }
          }
          else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Ləğv olundu.",
              "error"
            );
          }
        });
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth");
        }
      });
    }
  };

  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, cartItems]);

  return (
    <div id="cart">
      <div className="container">
        <h3>My cart</h3>
        <div className="container">
          <div className="top">
            <table>
              <tr>
                <th>Photo</th>
                <th>Product Name</th>
                <th>Count</th>
                <th className="dnone">Price</th>
                <th className="dnone">Total Price</th>
              </tr>

              {cartItems.length > 0 ?
                cartItems.map((product) => (
                  <tr>
                    <td>
                      <img
                        
                        src={`${FILE_PATH}${product.img}`}
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td className="dnone">{product.quantity}</td>
                    <td className="dnone">{product.price}£</td>
                    <td>
                      {product.price * product.quantity}£
                    </td>
                  </tr>

                )) : (
                  "No products added to the wishlist"
                )
              }
            </table>
          </div>
          <div className="bottom">
            <div className="container">
              <div className="bottom">
                <div className="row">
                  <div className="col-lg-7">
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                      <button className="shoppingButton">
                        Continue shopping
                      </button></Link>
                  </div>
                  <div className="col-lg-5">
                    <h3>Total</h3>
                    <table>
                      <tr>
                        <td>
                          <div className="row justify-content-between align-items-center">
                            <div className="col-lg-8">Price</div>
                            <div className="col-lg-4 price"> {totalPrice}£</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row justify-content-between align-items-center">
                            <div className="col-lg-8">Total price</div>
                            <div className="col-lg-4 price"> {totalPrice}£</div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <button onClick={() => addOrder()} >
                      Complete the order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;