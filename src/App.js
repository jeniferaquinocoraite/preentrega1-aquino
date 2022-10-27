import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import ItemDetailConteiner from "./componentes/itemDetailConteiner/itemaDetailContainer";
import  { NavBar } from './componentes/header/header';
import {ItemListconteiner} from './componentes/itemlistcontainer/ItemListContainer/itemlistconteiner';
const App = () => { 
 
  const nombre = "Jenifer"
  
return (
<>
<BrowserRouter>
<NavBar nombredeusuario = {nombre} >  
</NavBar> 
<Routes>
<Route path ="/" element={<ItemListconteiner /> }/>
<Route path ="/categoria/:idCategoria"  element={<ItemListconteiner /> }/>
<Route path ="/productos/:idProducto" element= { <ItemDetailConteiner/>}/>



</Routes>
</BrowserRouter>
</>

  );
};

export default App;
