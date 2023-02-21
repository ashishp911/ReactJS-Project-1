import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payments = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    billingAddress: "",
    cardNumber: "",
    cardholderName: "",
    expiration: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // do something with the form data, like submit it to a server
  };
  const backToHome = () => {
    // 👇️ navigate programmatically
    navigate("/");
  };
  const borderStyles = {
    border: '3px solid rgba(0, 0, 0, 0.3)', 
    };
  return (
    <>
      <h1> This is Payments page </h1>
      <hr />
      <form>
        <div className="row">
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputName" className="form-label">
              <h6>Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="namelHelp"
              placeholder="Enter your Name"
              style={borderStyles}
            />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h6>Email address</h6>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email Id"
              style={borderStyles}
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h6>Street Address</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="row">
            <div className="mb-2 col-2">
              <label htmlFor="exampleInputZipcode" className="form-label">
                <h6>Zip Code</h6>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputZipcode"
                placeholder="Zipcode"
                pattern="[0-9]{5}"
                style={borderStyles}
              />
            </div>
            <div className="mb-2 col-2">
              <label htmlFor="exampleInputCity" className="form-label">
                <h6>City</h6>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCity"
                placeholder="City"
                style={borderStyles}
              />
            </div>
            <div className="mb-2 col-2">
              <label htmlFor="exampleInputCountry" className="form-label">
                <h6>Country</h6>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCountry"
                placeholder="Country"
                style={borderStyles}
              />
            </div>
          </div>
          <hr />
          <div className="row mt-3">
          <div className="mb-2 col-5">
            <label htmlFor="exampleInputCardNum" className="form-label" >
              <h6>Card Number</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCardNum"
              placeholder="1234 5678 9012 3457"
              minlength="19" 
              maxlength="19"
              style={borderStyles}
            />
          </div>
          <div className="mt-3 col-1">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="64px" />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputCardName" className="form-label">
              <h6>Cardholder Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCardName"
              placeholder="Cardholder Name"
              style={borderStyles}
            />
          </div>
          </div>

          <div className="row mt-3">
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputExp" className="form-label">
              <h6>Expiration </h6>
            </label>
            <input
              type="text" id="exampleInputExp" 
              className="form-control" placeholder="MM/YYYY"
              size="7" minlength="7" maxlength="7" 
              style={borderStyles}
            />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputcvv" className="form-label" >
              <h6>CVV</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="typeText2"
              placeholder="&#9679;&#9679;&#9679;"
              size="1" minlength="3" maxlength="3"
              style={borderStyles}
            />
          </div>
          </div>

        <button type="submit" className="btn btn-info btn-lg btn-rounded my-2">
          PAY NOW
        </button>
      </form>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn btn-primary col-3" onClick={backToHome}>
          Go back to Shopping Cart
        </button>
      </div>
    </>
  );
};

export default Payments;

// Can you give me JSX for a payment form with the following fields Name, EmailId, Billing address, 
// Card number, Cardholder Name, expiration, cvv and submit button
