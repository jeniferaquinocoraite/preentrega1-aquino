import React from "react";
import './App.css';
import  Header, { NavBar } from './componentes/header/header';

const App = () => { 
 
  const nombre = "Jenifer"
return (
<>
<NavBar nombredeusuario = {nombre} />  
</>
  );
};

export default App
