import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FILE_PATH } from '../../api/config'
import { addToCartAction } from '../../redux/Actions/CartAction'
import { addToFavoriesAction } from '../../redux/Actions/FavoriesAction'
import { getProductsAction } from '../../redux/Actions/ProductAction'
import './reveal.scss'

const Reveal = () => {


    const { products } = useSelector((state) => state.products)
    const { cartItems } = useSelector((state) => state.cart)
    const { favoriesItems } = useSelector((state) => state.favories)
    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch])
    return (
        <div id='reveal'>
            <div className="container">
                <div className="top">
                    <div className="image">
                        <img src="https://dtiva.wpengine.com/wp-content/themes/iva/images/heading-floral-decor-image.png" alt="" />
                        <div className="text">
                            <h6>Reveal the beauty within yourself!</h6>
                            <h1>What's Latest</h1>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="row">
                        {
                            products &&
                            products.filter(x => x.isSale).map((product) => (
                                <div className="col-lg-3 box">
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
    )
}

export default Reveal