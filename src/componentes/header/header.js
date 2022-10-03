import React from 'react'
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = (props) => {
    return (

        <header style={style.conteiner}>
            <img style= {style.imagenes} src={logo} alt='tiendamisol'/>
        <h1 style = {style.titulo}>Mi Sol</h1>
        <h2>Hola {props.nombredeusuario}</h2>
        <nav>
          <a style = {style.secciones}href="">Quienes somos</a>
          <a style = {style.secciones} href="">Niñas</a>
          <a style = {style.secciones}href="">Niños</a>
          <a style = {style.secciones}href="">Ofertas exclusivas</a>
        </nav>
      <ShoppingCartIcon color ="primary" />
      </header>
    );
};
export default NavBar 
const style = {
  conteiner:{
    display: 'flex',
    alingItems: 'center',
  width: '100%',
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