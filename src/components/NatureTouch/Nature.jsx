import React from 'react'
import './nature.scss'

const Nature = () => {
  return (
    <div id='nature'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12 col-md-6">
                    <div className="image">
                        <img src="https://dtiva.wpengine.com/wp-content/uploads/2020/06/content-image6a.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-12 col-md-6">
                    <div className="text">
                        <p className='title'>A Nature's Touch</p>
                        <h1><span>Get 20%</span> Off on all Cosmetic Cream Packs</h1>
                        <button>Browse Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nature