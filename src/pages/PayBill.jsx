import React from "react";
import Hero from "../components/common/Hero/Hero";
import Footer from "../components/common/Footer/Footer";
import "../components/PayBill/PayBill.css";
import ImageAssets from "../components/common/ImageAssets";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PayBill = () => {
  return (
    <>
      <Hero
        image={ImageAssets.payBillImage}
        // heading="PAY BILL"
        showButton={false}
      />

      <div className="paybill-form-wrapper">
        <p>Pay Bill</p>

        <form className="paybill-form">
          <div className="top-inputs">
            <div className="form-group">
              <label>Patient Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Patient Date of Birth</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Total Amount Due</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-columns">
            <div className="payment-info">
              <p>Payment Info</p>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Expiration Date</label>
                <input type="text" />
              </div>

              <div className="expiration-row">
                <div className="form-group">
                  <label>MM</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>YY</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-group">
                <label>Security Code (CW)</label>
                <input type="text" />
              </div>

              <div className="card-icons">
                <img
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="Visa"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/mastercard.png"
                  alt="MasterCard"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/discover.png"
                  alt="Discover"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/amex.png"
                  alt="American Express"
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>State</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input type="text" />
              </div>
            </div>

            <div className="billing-info">
              <p>Billing Info</p>

              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Address 1</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Address 2</label>
                <input type="text" />
              </div>

              <div className="form-group address-2-adjusting">
                <label>Zip/Postal Code</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="email" />
              </div>
            </div>
          </div>
          <div className="submit-button-wrapper">
            <button type="submit">Submit Payment</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default PayBill;

// import React from "react";
// import Hero from "../components/common/Hero/Hero";
// import Footer from "../components/common/Footer/Footer";
// import "../components/PayBill/PayBill.css";
// import ImageAssets from "../components/common/ImageAssets";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// const PayBill = () => {
//   return (
//     <>
//       <Hero image={ImageAssets.payBillImage} heading="PAY BILL" showButton={false} />

//       <div className="paybill-form-wrapper">
//         <p>Pay Bill</p>

//         <form className="paybill-form">
//           <div className="top-inputs">
//             <label>Patient Name</label>
//             <input type="text" />

//             <label>Patient Date of Birth</label>
//             <input type="text" />

//             <label>Total Amount Due</label>
//             <input type="text" />
//           </div>

//           <div className="form-columns">
//             <div className="payment-info">
//               <h3>Payment Info</h3>

//               <label>Card Number</label>
//               <input type="text" />

//               <label>Expiration Date</label>
//               <input type="text" />

//               <div className="expiration-row">
//                 <div>
//                   <label>MM</label>
//                   <input type="text" />
//                 </div>
//                 <div>
//                   <label>YY</label>
//                   <input type="text" />
//                 </div>
//               </div>

//               <label>Security Code (CW)</label>
//               <input type="text" />

//               <div className="card-icons">
//             <img
//               src="https://img.icons8.com/color/48/000000/visa.png"
//               alt="Visa"
//             />
//             <img
//               src="https://img.icons8.com/color/48/000000/mastercard.png"
//               alt="MasterCard"
//             />
//             <img
//               src="https://img.icons8.com/color/48/000000/discover.png"
//               alt="Discover"
//             />
//             <img
//               src="https://img.icons8.com/color/48/000000/amex.png"
//               alt="American Express"
//             />
//           </div>
//               <label>City</label>
//               <input type="text" />

//               <label>State</label>
//               <input type="text" />

//               <label>Country</label>
//               <input type="text" />

//               <label>Phone</label>
//               <input type="text" />
//             </div>

//             <div className="billing-info">
//               <h3>Billing Info</h3>

//               <label>First Name</label>
//               <input type="text" />

//               <label>Last Name</label>
//               <input type="text" />

//               <label>Address 1</label>
//               <input type="text" />

//               <label>Address 1</label>
//               <input type="text" />

//               <label>Address 2</label>
//               <input type="text" />

//               <label>Zip/Postal Code</label>
//               <input type="text" />

//               <label>Email Address</label>
//               <input type="email" />

//               <button type="submit">Submit Payment</button>
//             </div>
//           </div>
//         </form>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default PayBill;

// import React from "react";
// import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import "./PayBill.css";
// import ImageAssets from "../components/ImageAssets";

// const PayBill = () => {
//   return (
//     <>
//       <Hero image={ImageAssets.payBillImage} heading="PAY BILL" showButton={false} />

//       <div className="paybill-form-wrapper">
//         <h2>Pay Bill</h2>

//         <form className="paybill-form">
//           <div className="top-inputs">
//             <input type="text" placeholder="Patient Name" />
//             <input type="text" placeholder="Patient Date of Birth" />
//             <input type="text" placeholder="Total Amount Due" />
//           </div>

//           <div className="form-columns">
//             <div className="payment-info">
//               <h3>Payment Info</h3>
//               <input type="text" placeholder="Card Number" />
//               <input type="text" placeholder="Expiration Date" />
//               <div className="expiration-row">
//                 <input type="text" placeholder="MM" />
//                 <input type="text" placeholder="YY" />
//               </div>
//               <input type="text" placeholder="Security Code (cw)" />
//               <div className="card-icons">[Visa / MasterCard icons]</div>
//               <input type="text" placeholder="City" />
//               <input type="text" placeholder="State" />
//               <input type="text" placeholder="Country" />
//               <input type="text" placeholder="Phone" />
//             </div>

//             <div className="billing-info">
//               <h3>Billing Info</h3>
//               <input type="text" placeholder="First Name" />
//               <input type="text" placeholder="Last Name" />
//               <input type="text" placeholder="Address 1" />
//               <input type="text" placeholder="Address 1" />
//               <input type="text" placeholder="Address 2" />
//               <input type="text" placeholder="Zip/Postal Code" />
//               <input type="email" placeholder="Email Address" />
//               <button type="submit">Submit Payment</button>
//             </div>
//           </div>
//         </form>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default PayBill;
