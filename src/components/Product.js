import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-3">
        <h2>
          {props.product.name}{" "}
          
        </h2>
      </div>
      <div className="col-2">
        <h3>
            <span className="badge bg-dark">Rs. {props.product.price}</span>
        </h3>
      </div>
      <div className="col-3">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={() => {
                props.decrementQuantity(props.index)
            }}>
                -
            </button>
            <button type="button" className="btn btn-outline-primary">
                {props.product.quantity}
            </button>   
            <button type="button" className="btn btn-outline-primary" onClick={() => {
                props.incrementQuantity(props.index)
            }}>
                +
            </button>
            </div>
      </div>
      <div className="col-2">
        Rs. {props.product.quantity * props.product.price} 
      </div>
      
      <button className="col-2 btn btn-danger" onClick={()=>{
        props.removeItem(props.index);
      }}>
        Remove Item
      </button>
    </div>
  );
}
