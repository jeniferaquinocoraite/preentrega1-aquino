import React from 'react';
const Item = ({ producto }) => {
  const { id, img, nombre, talle, precio, stock, hashtags } = producto;

  return (
    <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
      <img src={img} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <p className="card-text">{nombre}</p>
        <p className="card-text">{talle}</p>
        <p className="card-text">${precio}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
        {/* safe navigation operator, en JS Optional chaining o encadenamiento opcional ,
         les dejo el link de la docu: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      </div>

      <button className="btn btn-primary">Ver más</button>
    </div>
  );
};

export default Item;
