import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ItemCount } from '../itemcount/itemcount';

export const CartWidget = () => {
  const onAdd = (count) => {
    console.log (`El usuario quiere agregar ${count} productos` )
}


  return (
    <>
    <ShoppingCartIcon color="primary" fontSize="large" />
<ItemCount  stock={100} initial={0} onAdd ={onAdd}/>
</>
  )
};
