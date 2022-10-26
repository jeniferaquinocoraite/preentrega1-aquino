import React,  {useEffect, useState} from 'react';
import ItemList from '../itemlist/itemlist';
import { data } from '../listaDeProductos/listaDeProductos';
import { useParams } from 'react-router-dom'; 

export const  ItemListconteiner =  () =>{
  
  const [productos, setProductos] =useState ([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if( idCategoria === undefined ){
    //traigo todos los productos
        data
          .then((res) => setProductos(res))
          .catch(() => ('hubo un error, intente mas tarde'))
          .finally(() => setLoading(false));
    }else{
    //traigo los filtrados
        data
          .then((res) => setProductos(res.filter(productos => productos.categoria === idCategoria)))
          .catch(() => ('hubo un error, intente mas tarde'))
          .finally(() => setLoading(false));
    }
      }, [idCategoria]);
  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListconteiner;