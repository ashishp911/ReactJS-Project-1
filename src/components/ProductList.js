// VS code shortcut for creating function component == > rfc

import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  // console.log(props)
  return (
    props.productList.length > 0 ?
    props.productList.map((product, index) => {
        return (
          <Product
            product={product}
            key={index}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
            index={index}
          />
        );
      })
      :
      <h1>No products to display</h1>
    )
}
