import React from 'react';
import logo from '../../assets/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = (props) => {
  const secciones =[
  {nombre:"Quienes somos", id:0, ruta:"#"},
  {nombre: "Nenas", id:1, ruta:"#"},
  {nombre:"Varones", id:2, ruta:"#"},
  {nombre:"Ofertas exclusivas", id:3, ruta:"#"},
]
    return (

        <header style={style.conteiner}>
            <img style= {style.imagenes} src={logo} alt='tiendamisol'/>
        <h1 style = {style.titulo}>Mi Sol</h1>
        <h2>Hola {props.nombredeusuario}</h2>
        <nav>
          {
          secciones.map ((categoria)=>{ 
            return <a key={categoria.id} style = {style.secciones}href={categoria.ruta}>{categoria.nombre}</a>
          })         
          }
       
        </nav>
      <CartWidget/>
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
secciones: {
  margin: 20,
    fontSize: 20,   
    color: 'orange',
},
titulo:{
  color:'orange',
  fontSize: 50,
}
}