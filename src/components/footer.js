import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/payment");
  };
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        Rs. {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2" onClick={handleClick}>
        Pay Now
      </button>
    </div>
  );
}
