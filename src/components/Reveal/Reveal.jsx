import React from 'react'
import './reveal.scss'

const Reveal = () => {
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
                        <div className="col-lg-3 box">
                            <img className='mainImage' src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/Product-Images-jpeg-02.jpg" alt="" />
                            <div className="image">
                                <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/Product-Images-jpeg-01.jpg" alt="" />
                            </div>
                            <div className="sale">
                                <span>Sale</span>
                            </div>
                            <div className="icons">
                                <i class="fa-solid fa-cart-plus"></i>
                                <i class="fa-solid fa-heart"></i>
                                <i class="fa-solid fa-code-compare"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="text">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <p className='parag1'>Dio CC Cream</p>
                            <p className='parag2'> <s className='outline'>£12.00</s>£11.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Reveal