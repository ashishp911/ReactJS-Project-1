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
  return (
    <>
      <h1> This is Payments page {props.totalAmount} </h1>
      <form>
        <div className="row">
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="namelHelp"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Email Id"
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Street Address
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Zip Code
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="417007"
              />
            </div>
            <div className="mb-2 col-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                City
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="City"
              />
            </div>
            <div className="mb-2 col-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Country
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Country"
              />
            </div>
          </div>
          <hr />
          <div className="row mt-3">
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputPassword1" className="form-label" placeholder="1234 5678 9012 3457" >
              <h6>Card Number</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="1234 5678 9012 3457"
              minlength="19" 
              maxlength="19"
            />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="exampleInputPassword1" className="form-label" placeholder="1234 5678 9012 3457" >
              <h6>Cardholder Name</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Cardholder Name"
            />
          </div>
          </div>

        <button type="submit" className="btn btn-primary my-2">
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
