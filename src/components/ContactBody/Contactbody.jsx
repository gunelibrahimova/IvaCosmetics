import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './contactbody.scss'
import { BASE_URL } from "./../../api/config";

const Contactbody = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const notify = () =>
    toast(
      <Link to={'/contact'} style={{ textDecoration: "none", zIndex: "9999999999999999" }}>
      "We will answer your question via email or phone number!"
    </Link>
    );

  const postData = async () => {
    fetch(`${BASE_URL}contact/add`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: name,
        userEmail: email,
        userPhone: phone,
        message: message
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

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
            <input type="text" placeholder='Your name' onChange={(e) => setName(e.target.value)}/> <br />
            <input type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)}/> <br />
            <input type="text" placeholder='Your phone' onChange={(e) => setPhone(e.target.value)}/> <br />
            <input type="text" placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>

            <button onClick={() => {postData(); notify();}}>Submit</button>


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
  )
}

export default Contactbody