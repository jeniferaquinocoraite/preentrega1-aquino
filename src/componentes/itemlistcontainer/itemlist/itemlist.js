import React from 'react'
import Item from '../item/item';
const ItemList = ({ productos }) => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {productos.map((productos) => (
        <Item key={productos.id} productos={productos} />
      ))}
    </div>
  );
};

export default ItemList;
