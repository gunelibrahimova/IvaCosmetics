import React from 'react'
import './beautyessentials.scss'

const BeautyEssentials = () => {
    return (
        <div id='beauty'>
            <div className="container">
                <div className="top">
                    <div className="image">
                        <img src="https://dtiva.wpengine.com/wp-content/themes/iva/images/heading-floral-decor-image.png" alt="" />
                        <div className="text">
                            <h6>Nature's Touch</h6>
                            <h1>Beauty Essentials</h1>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="colorBox">
                                <div className="photo">
                                    <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/Product-Images-01.png" alt="" />
                                </div>
                                <div className="text">
                                        <h3>Fairness Cream</h3>
                                        <p>Starts from £18.00</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="colorBox2">
                                <div className="photo">
                                    <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/Product-Images-02.png" alt="" />
                                </div>
                                <div className="text">
                                        <h3>Beauty Cream</h3>
                                        <p>Starts from £18.00</p>
                                    </div>
                            </div>
                        </div><div className="col-lg-4">
                            <div className="colorBox3">
                                <div className="photo">
                                    <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/Product-Images-03.png" alt="" />
                                </div>
                                <div className="text">
                                        <h3>Dry Skin</h3>
                                        <p>Starts from £18.00</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeautyEssentials