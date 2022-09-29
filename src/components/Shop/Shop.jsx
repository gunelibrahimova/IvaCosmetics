import { Slider, Typography } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FILE_PATH } from '../../api/config';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { getCategoryAction } from '../../redux/Actions/CategoryAction';
import { addToFavoriesAction } from '../../redux/Actions/FavoriesAction';
import { getProductsAction } from '../../redux/Actions/ProductAction';
import { getSizeAction } from '../../redux/Actions/SizeAction';
import './shop.scss'

const Shop = () => {

    // Our States
    const [value, setValue] = React.useState([2, 10]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    };

    const { categories } = useSelector((state) => state.category)
    const { products } = useSelector((state) => state.products)
    const { cartItems } = useSelector((state) => state.cart)
    const { favoriesItems } = useSelector((state) => state.favories)
    const dispatch = useDispatch();
    const { sizes } = useSelector((state) => state.size)

    useEffect(() => {
        dispatch(getCategoryAction())
        dispatch(getSizeAction())
        dispatch(getProductsAction())
    }, [dispatch])

    const addToCartHadler = (id, name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToCartAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToCartAction(id, 1))
        }
    }

    const addToCartHandler = (id, name) => {
        var myCart = favoriesItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToFavoriesAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToFavoriesAction(id, 1))
        }
    }
    return (
        <div id='shop'>
            <div className="top">
                <div className="image">
                    <img width="100%" src="http://dtiva.wpengine.com/wp-content/uploads/2020/05/breadcrumb-1.jpg" alt="" />
                </div>
                <div className="text">
                    <h1>Shop</h1>
                    <p>Home - Shop</p>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="box">
                                <h3>Product categories</h3>
                                {
                                    categories &&
                                    categories.map((cat) => (
                                        <div key={cat.id}>
                                            <p>{cat.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="box">
                                <h3>Shop By Size</h3>
                                {
                                    sizes &&
                                    sizes.map((item) => (
                                        <div className="smallBox d-flex justify-content-center">
                                            <div className="col-lg-8">
                                                <p>{item.size}</p>
                                            </div>
                                            <div className="col-lg-4">({item.count})</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="box2">
                                <div style={{
                                    margin: 'auto',
                                    // display: 'block',
                                    width: 'fit-content'
                                }}>
                                    <h3>Shop by Price</h3>
                                    <Typography id="range-slider" gutterBottom>

                                    </Typography>
                                    <Slider
                                        value={value}
                                        onChange={rangeSelector}
                                        valueLabelDisplay="auto"
                                    />
                                    Your range of Price is between £ {value[0]} - £ {value[1]}
                                </div>
                                <button>Filter</button>
                            </div>
                            <div className="box3">
                                <h3>Shop By Size</h3>
                                <div className="smallBox d-flex align-items-center  justify-content-center">
                                    <div className="col-lg-8">
                                        <h6>Myst Spray</h6>
                                        <p><del>£40.00</del> £28.00</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img width="40%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/shop-58.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="smallBox d-flex align-items-center  justify-content-center">
                                    <div className="col-lg-8">
                                        <h6>Texas Primer</h6>
                                        <p><del>£40.00</del> £28.00</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img width="40%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/shop-58.jpg" alt="" />
                                        </div>
                                    </div>
                                </div><div className="smallBox d-flex align-items-center  justify-content-center">
                                    <div className="col-lg-8">
                                        <h6>BB Cream</h6>
                                        <p><del>£40.00</del> £28.00</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="image">
                                            <img width="40%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/shop-58.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>

                        <div className="col-lg-9">
                            <div className="boxes">
                                <div className="row">
                                    {
                                        products &&
                                        products.map((product) => (
                                            <div className="col-lg-4 box">
                                                <Link to={'/product/' + product.id}>
                                                    <div className="images">
                                                        <img className='mainImage' src={`${FILE_PATH}${product.coverPhoto}`} alt="" />

                                                        <div className="image">

                                                            <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/Product-Images-jpeg-01.jpg" alt="" />
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

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop