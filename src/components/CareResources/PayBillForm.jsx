import React from "react";
import "./PayBillForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PayBillForm = () => {
  return (
    <div className="paybill-form-full">
      <div className="paybill-top">
        <div>
          <label>Patient Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Patient Date of Birth</label>
          <input type="text" />
        </div>
        <div>
          <label>Total Amount Due</label>
          <input type="text" />
        </div>
      </div>

      <div className="paybill-bottom">
        <div className="paybill-half">
          <h4>Payment Info</h4>
          <label>Card Number</label>
          <input type="text" />
          <label>Expiration Date</label>
          <input type="text" />
          <div className="expiration-row-form">
            <div>
              <label>MM</label>
              <input type="text" />
            </div>
            <div>
              <label>YY</label>
              <input type="text" />
            </div>
          </div>
          <label>Security Code (CW)</label>
          <input type="text" />
          <div className="card-icons-form">
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
          <label>City</label>
          <input type="text" />
          <label>State</label>
          <input type="text" />
          <label>Country</label>
          <input type="text" />
          {/* <label>Phone</label>
          <input type="text" /> */}
        </div>

        <div className="paybill-half">
          <h4>Billing Info</h4>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Address 1</label>
          <input type="text" />
          <label>Address 2</label>
          <input type="text" />
          <label className="address-2-adjust">Zip/Postal Code</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="text" />
          <label>Phone</label>
          <input type="text" />
        </div>
      </div>
         <div className="paybill-button-wrapper">
  <button className="__button-form" type="submit">
    Submit Payment
  </button>
</div>

    </div>
  );
};

export default PayBillForm;

// import React from "react";
// import "./PayBillForm.css";

// const PayBillForm = () => {
//   return (
//     <div className="paybill-container">
//       <div className="paybill-heading">
//         <h3>Pay Bill</h3>

//         <div className="top-inputs">
//           <div>
//             <label>Patient Name</label>
//             <input type="text" />
//           </div>
//           <div>
//             <label>Patient Date of Birth</label>
//             <input type="text" />
//           </div>
//           <div>
//             <label>Total Amount Due</label>
//             <input type="text" />
//           </div>
//         </div>
//       </div>

//       <div className="paybill-form-columns">
//         <div className="payment-info">
//           <h4>Payment Info</h4>
//           <label>Card Number</label>
//           <input type="text" />
//           <label>Expiration Date</label>
//           <input type="text" />
//           <div className="expiration-row">
//             <div>
//               <label>MM</label>
//               <input type="text" />
//             </div>
//             <div>
//               <label>YY</label>
//               <input type="text" />
//             </div>
//           </div>
//           <label>Security Code (CW)</label>
//           <input type="text" />
//           <div className="card-icons">[Visa / MasterCard icons]</div>
//           <label>City</label>
//           <input type="text" />
//           <label>State</label>
//           <input type="text" />
//           <label>Country</label>
//           <input type="text" />
//           <label>Phone</label>
//           <input type="text" />
//         </div>

//         <div className="billing-info">
//           <h4>Billing Info</h4>
//           <label>First Name</label>
//           <input type="text" />
//           <label>Last Name</label>
//           <input type="text" />
//           <label>Address 1</label>
//           <input type="text" />
//           <label>Address 1</label>
//           <input type="text" />
//           <label>Address 2</label>
//           <input type="text" />
//           <label>Zip/Postal Code</label>
//           <input type="text" />
//           <label>Email Address</label>
//           <input type="email" />
//           <button type="submit">Submit Payment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayBillForm;

// import React from "react";
// import "./PayBillForm.css";

// const PayBillForm = () => {
//   return (
//     <div className="paybill-container">
//       <div className="pb-row">
//         <label>Patient Name</label>
//         <input type="text" />
//       </div>
//       <div className="pb-row">
//         <label>Patient Date of Birth</label>
//         <input type="text" />
//       </div>
//       <div className="pb-row">
//         <label>Total Amount Due</label>
//         <input type="text" />
//       </div>

//       <div className="pb-two-column">
//         <div className="pb-left">
//           <h3>Payment Info</h3>
//           <label>Card Number</label>
//           <input type="text" />
//           <label>Expiration Date</label>
//           <div className="pb-expiry">
//             <input type="text" placeholder="MM" />
//             <input type="text" placeholder="YY" />
//           </div>
//           <label>Security Code (CW)</label>
//           <input type="text" />
//           <label>City</label>
//           <input type="text" />
//           <label>State</label>
//           <select>
//             <option>Please Select</option>
//           </select>
//           <label>Country</label>
//           <input type="text" defaultValue="United States" />
//           <label>Phone</label>
//           <input type="text" />
//         </div>

//         <div className="pb-right">
//           <h3>Billing Info</h3>
//           <label>First Name</label>
//           <input type="text" />
//           <label>Last Name</label>
//           <input type="text" />
//           <label>Address 1</label>
//           <input type="text" />
//           <label>Address 2</label>
//           <input type="text" />
//           <label>Zip/Postal Code</label>
//           <input type="text" />
//           <label>Email Address</label>
//           <input type="email" />
//         </div>
//       </div>

//       <button type="submit" className="pb-submit">Submit Payment</button>
//     </div>
//   );
// };

// export default PayBillForm;

// import React from "react";
// import "./PayBillForm.css";

// const PayBillForm = () => {
//   return (
//     <form className="paybill-form">
//       <h2>Pay Bill</h2>
//       <div className="pb-section">
//         <div className="pb-left">
//           <label>Patient Name</label>
//           <input type="text" />
//           <label>Patient Date of Birth</label>
//           <input type="text" />
//           <label>Total Amount Due</label>
//           <input type="text" />

//           <h3>Payment Info</h3>
//           <label>Card Number</label>
//           <input type="text" />
//           <label>Expiration Date</label>
//           <div className="pb-row">
//             <input type="text" placeholder="MM" />
//             <input type="text" placeholder="YY" />
//           </div>
//           <label>Security Code (CW)</label>
//           <input type="text" />

//           <label>City</label>
//           <input type="text" />
//           <label>State</label>
//           <select>
//             <option>Please Select</option>
//           </select>
//           <label>Country</label>
//           <input type="text" defaultValue="United States" />
//           <label>Phone</label>
//           <input type="text" />
//         </div>

//         <div className="pb-right">
//           <h3>Billing Info</h3>
//           <label>First Name</label>
//           <input type="text" />
//           <label>Last Name</label>
//           <input type="text" />
//           <label>Address 1</label>
//           <input type="text" />
//           <label>Address 1</label>
//           <input type="text" />
//           <label>Address 2</label>
//           <input type="text" />
//           <label>Zip/Postal Code</label>
//           <input type="text" />
//           <label>Email Address</label>
//           <input type="text" />
//         </div>
//       </div>

//       <button type="submit">Submit Payment</button>
//     </form>
//   );
// };

// export default PayBillForm;
