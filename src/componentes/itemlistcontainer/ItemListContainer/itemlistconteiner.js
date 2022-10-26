import React,  {useEffect, useState} from 'react';
import ItemList from '../itemlist/itemlist';
import { data } from '../listaDeProductos/listaDeProductos';
import { useParams } from 'react-router-dom'; 

export const  ItemListconteiner =  () =>{
  
  const [productos, setProductos] =useState ([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams()

  useEffect(() => {
    data
      .then((res) => setProductos(res))
      .catch(() => ('hubo un error, intente mas tarde'))
      .finally(() => setLoading(false));
  }, []);
  const filtrado   =  data.filter (productos => productos.categoria === idCategoria);

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