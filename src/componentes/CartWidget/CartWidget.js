import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ItemCount } from '../itemcount/itemcount';

export const CartWidget = () => {
  return (
    <>
    <ShoppingCartIcon color="primary" fontSize="large" />
<ItemCount/>
</>
  )
}
