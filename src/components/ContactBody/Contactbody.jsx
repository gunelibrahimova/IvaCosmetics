import React from 'react'
import './contactbody.scss'

const Contactbody = () => {
  return (
    <div id='contactBody'>
      <div className="image">
        <img width="100%" src="http://dtiva.wpengine.com/wp-content/uploads/2020/04/section-bgimage1.jpg" alt="" />
      </div>
      <div className="top">
        <div className="image2">
          <img src="https://dtiva.wpengine.com/wp-content/themes/iva/images/heading-floral-decor-image.png" alt="" />
          <div className="text">
            <h6>Keep Connected</h6>
            <h1>Get in Touch</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" row">
          <div className="col-lg-7 col-12 bottom">
            <h2>Write to us</h2>
            <input type="text" placeholder='Name'/> <br />
            <input type="text" placeholder='Email' /> <br />
            <input type="text" placeholder='Phone' /> <br />
            <input type="text" placeholder='Message' />

            <button>Submit</button>

            <div className="left">
              <h3>Contact Info</h3>
              <p>Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. SedMaecenas nec odio et ante tincidunt tempus.</p>
              <div className="spanBox">
                <p><i class="fa-solid fa-location-dot"></i>176 Hanover Road,Hummelstown, PA 17036</p>
                <p><i class="fa-solid fa-phone"></i>+841 123 456 78</p>
                <p><i class="fa-solid fa-envelope"></i>info@dtiva.com</p>
              </div>

            </div>
          </div>
          

        </div>

      </div>
    </div>
  )
}

export default Contactbody