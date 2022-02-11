import React from "react";

export const ProductDetail = ({ product }) => {
  if (product) {
    return (
      <div>
        <h3>Especificaciones del Producto</h3>
      </div>
    );
  }

  return <div></div>;
};

export default ProductDetail;
