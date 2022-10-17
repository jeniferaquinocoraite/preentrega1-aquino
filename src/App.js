import React from "react";
import './App.css';
import  { NavBar } from './componentes/header/header';
import {Itemlistconteiner} from './componentes/itemlistcontainer/itemlistconteiner';
const App = () => { 
 
  const nombre = "Jenifer"
  const mensaje ="Bienvenido a Mi Sol Online"
return (
<>
<NavBar nombredeusuario = {nombre} >  
</NavBar>
<Itemlistconteiner greetting={mensaje}  />
</>

  );
};

export default App;
