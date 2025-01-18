import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import { ProductContext } from "../contexts/ProductContext";

export default function ProductDetails() {
  //get the product id from the url

  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.fin((item) => {
    return item.id === parseInt(id);
  });

  //if product is not found
  if(!product){
    return <section className="h-screen flex justify-center">Loading...</section>
  }

  //destructure product

  const {title,price, description,image} = product
  return (
    <section className="pt-32 pb-12 lg:py">
      <div className="container mx-auto"> 
        {/* image */}
        <div>image</div>
        {/* image */}
        <div>text</div>
      </div>
    </section>
  );
}
