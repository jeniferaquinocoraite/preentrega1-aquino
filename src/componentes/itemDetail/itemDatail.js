import React from "react";
export const ItemDetail = ({productos}) => {

  return (
    <div>
      <h1>Detalles del producto</h1>
      <h2>Nombre: " {productos.nombre} "</h2>
      <h2> Talle: N°{productos.talle }</h2>
      <h2>Precio: $ { productos.precio }</h2>
      <h2>Categoria: { productos.categoria }</h2>
      <h2>Stock: { productos.stock }</h2>
    </div>
  );
};