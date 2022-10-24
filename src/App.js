import React from "react";
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import  { NavBar } from './componentes/header/header';
import {Itemlistconteiner} from './componentes/itemlistcontainer/ItemListContainer/itemlistconteiner';
const App = () => { 
 
  const nombre = "Jenifer"

  



  
return (
<>
<NavBar nombredeusuario = {nombre} >  
</NavBar> 
<Itemlistconteiner />
</>

  );
};

export default App;
