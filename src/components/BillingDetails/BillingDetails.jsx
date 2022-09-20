import React from "react";
import "./billingDetails.scss";

const BillingDetails = () => {
  return (
    <div>
      <div id="billingdetails">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12 bottom">
              <h2>Billing Details</h2>
              <input type="text" placeholder="First name" /> <br />
              <input type="text" placeholder="Last name" /> <br />
              <input type="text" placeholder="Your email" /> <br />
              <input type="text" placeholder="Your phone" /> <br />
              <input type="text" placeholder="Address" />
            </div>
            <div className="col-lg-5">
              <div className="cart_totals">
                <h3>YOUR ORDER</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <td>Hydrating Camo Concealer</td>
                    </tr>
                    <tr>
                      <th>SubTotal</th>
                      <td>£147.00</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td style={{ fontWeight: "700" }}>£147.00</td>
                    </tr>
                  </tbody>
                </table>
                <button>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;