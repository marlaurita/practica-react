import React from "react";
import { useLocation } from "react-router";

const ProductDetail = () => {
  const location = useLocation();
  const { prd } = location.state;

  console.log(prd);
  return <h1>Hola soy el detalle de un producto: {prd.title}</h1>;
};

export default ProductDetail;
