import React,  {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from '../itemDetail/itemDatail';
import { data } from '../itemlistcontainer/listaDeProductos/listaDeProductos';

export const  ItemDetailConteiner =  () =>{
  
  const [productos, setProductos] =useState ([]);
  const [loading, setLoading] = useState(true);
const {idProductos } = useParams ();
useEffect(() => {
  if( idProductos === undefined ){
      data
        .then((res) => setProductos(res))
        .catch(() => ('hubo un error, intente mas tarde'))
        .finally(() => setLoading(false));
  }else{
  //traigo los filtrados
      data
        .then((res) => setProductos(res.filter(productos => productos.id === idProductos)))
        .catch(() => ('hubo un error, intente mas tarde'))
        .finally(() => setLoading(false));
  }
    }, [idProductos]);
  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail productos={productos} />
      )}
    </div>
  );
};

export default ItemDetailConteiner;