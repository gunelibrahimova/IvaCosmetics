import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL, FILE_PATH } from "../../api/config";
import { addToCartAction } from "../../redux/Actions/CartAction";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { getCategoryAction } from "../../redux/Actions/CategoryAction"

import "./categoryDetail.scss";

const CategoryDetail = () => {
    const { id } = useParams();
    const [category, setCategorys] = useState([]);
    const { cartItems } = useSelector((state) => state.cart);
    const { favoriesItems } = useSelector((state) => state.favories);
    const { products } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const notify = () =>
        toast(
            <Link to="/cart" style={{ textDecoration: "none" }}>
                "Product added to cart !"
            </Link>
        );
    const notifyF = () =>
        toast(
            <Link
                to="/wishlist"
                style={{ textDecoration: "none", zIndex: "9999999999999999" }}
            >
                "Product added to wishlist !"
            </Link>
        );
    const addToCartHadler = (id, name) => {
        var myCart = cartItems.find((e) => e.id === id);
        if (myCart) {
            dispatch(addToCartAction(id, myCart.quantity + 1));
        } else {
            dispatch(addToCartAction(id, 1));
        }
    };

    const addToCartHandler = (id, name) => {
        var myCart = favoriesItems.find((e) => e.id === id);
        if (myCart) {
            dispatch(addToFavoriesAction(id, myCart.quantity + 1));
        } else {
            dispatch(addToFavoriesAction(id, 1));
        }
    };

    const getCategory = async () => {
        await fetch(BASE_URL + "category/getbyid/" + id)
            .then((res) => res.json())
            .then((data) => setCategorys(data.message));
    };
    useEffect(() => {
        dispatch(getCategoryAction());
        dispatch(getProductsAction());
        getCategory();
    }, [dispatch]);

    return (
        <div id="categorydetail">
            <div className="top">
                <div className="box">
                    <div className="image">
                        <div className="d-flex">
                            <Link to='/categories' style={{ textDecoration: "none" }}>
                                <p style={{ cursor: "pointer" }}>Category:</p>
                            </Link>
                            <p style={{ marginLeft: "10px" }}>{category.name}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <h1>{category.name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                            accumsan lacus vel facilisis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="boxes">
                <div className="container">
                <div className="row">
                        {
                            products &&
                            products.filter((x) => x.categoryName == category.name).map((product) => (
                                <div className="col-lg-3 col-md-6 box">
                                    <Link to={'/product/' + product.id}>
                                        <div className="images">
                                            <img className='mainImage' src={`${FILE_PATH}${product.coverPhoto}`} alt="" />

                                            <div className="image">

                                                <img width="100%" src={product.secondPhoto} alt="" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="sale">
                                        <span> Sale</span>
                                    </div>
                                    <div className="icons">
                                        <i class="fa-solid fa-cart-plus" onClick={() => addToCartHadler(product.id, product.name)}></i>
                                        <i class="fa-solid fa-heart" onClick={() => addToCartHandler(product.id, product.name)}></i>
                                        <i class="fa-solid fa-code-compare"></i>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <div className="text">
                                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                        <p className='parag1'>{product.name}</p>
                                        <p className='parag2'> <s className='outline'>£{product.price}</s>£{product.salePrice}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                   
                </div>
            <ToastContainer
                limit={3}
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </div>
    );
};

export default CategoryDetail;