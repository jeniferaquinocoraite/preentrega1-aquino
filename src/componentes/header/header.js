/*import { Link } from '@mui/material';*/
import React from 'react';
import logo from '../../assets/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link  } from 'react-router-dom'; 
export const NavBar = () => {
  const categoria =[
  {nombre:"verano", id:0, ruta:"/categoria/verano"},
  {nombre:"invierno", id:1, ruta:"/categoria/invierno"},
 
];
    return (
      

        <header style={style.conteiner}>
<Link to="/">
            <img style= {style.imagenes} src={logo} alt='tiendamisol'/>
            </Link>
        <h1 style = {style.titulo}>Mi Sol</h1>
        <nav>
          {
          categoria.map ((categorias)=>{ 
            return <Link key={categorias.id} style = {style.categoria} to={categorias.ruta}>{categorias.nombre}</Link>
          })        
          }
       
        </nav>
        <Link to ="/cart">
      <CartWidget />
      </Link>

        </header>
    );
};
export default NavBar 
const style = {
  conteiner:{
    display: 'flex',
    alingItems: 'center',
  width: '80%',
  justifyContent: 'space-between',
  height: 100, 
  margin:20,
},
imagenes: {
  width: 200,
height: 100,
},
categoria: {  margin: 20,
    fontSize: 20,   
    color: 'orange',
},
titulo:{
  color:'orange',
  fontSize: 50,
}
}