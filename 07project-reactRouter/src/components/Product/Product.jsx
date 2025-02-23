import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { productID } = useParams();
  return (
    <div className="bg-gray-100 text-3xl p-5 text-center">
      Product Number: {productID}
    </div>
  );
}

export default Product;
