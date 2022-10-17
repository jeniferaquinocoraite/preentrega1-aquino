import { orange } from "@mui/material/colors";
import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) { 
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  

  return (
    <div>
      <button style = {styles.boton} onClick={subtract}>-</button>
      <h2 style = {styles.agregar}>{count}</h2>
      <button style = {styles.boton}  onClick={add}>+</button>
      <button disabled={stock === 0} onClick={()=>onAdd (count)}>
        <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
      </button>
    </div>
  );
};
const styles = {boton: {    
  color: orange, },

agregar:{fontSize: 50, color: orange,}}
