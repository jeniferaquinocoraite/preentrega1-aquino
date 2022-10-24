import React,  {useEffect, useState} from 'react';

const productos = [{id : 1,
    img: "../../assets/nenas/ropa2.png",
    nombre: "Vestido verano",
    talle: 1,
    precio:500 
    },
    {id : 2,
    nombre: "Bodys manga corta",
    talle: 1,
    img: "../imagenes/nenacatalogo/bodysvarios.jpg",
    precio:500
    },
    {id : 3,
    nombre: "Vestido floral claro",
    img: "../imagenes/nenacatalogo/ropa-.png",
    talle: 2,
    precio:700
    },
    {id :4,
    img: "../imagenes/nenacatalogo/barbieconjunto.jpg",
    nombre: "Jogging Barbie",
    talle: 12,
    precio:3000
    },
    {id : 5,
    nombre: "Conjunto Cisne",
    precio: 1500,
    img: "../imagenes/nenacatalogo/cisneconjunto.jpg",
    talle: 1,
    },
    {id : 6,
    nombre: "Conjunto Conejo",
    precio:1500,
    img: "../imagenes/nenacatalogo/conejoconjunto.jpg",
    talle: 1,    
    },
    {id : 7,
    nombre: "Jogging Deportivo",
    precio:3500,
    img:"../imagenes/nenacatalogo/jogging.jpg", 
    talle:10
    },
    {id : 8,
        nombre: "Conjunto de 3 piezas",
        precio:3500,
        img:"../imagenes/nenacatalogo/marronconjunto.jpg", 
        talle:10
    },
    {id : 9,
        nombre: "Conjunto Mariposa",
        precio:3500,
        img:"../imagenes/nenacatalogo/mariposa.jpg", 
        talle:2
    }, 
    {id : 10,
        nombre: "Jogging Pepa Pig",
        precio:3500,
        img:"../imagenes/nenacatalogo/pepaconjunto.jpg", 
        talle: 10
    }
    ];

    const obtenerProductos = new Promise ((resolve, reject) => { 
        
        setTimeout (()=>{
        resolve (productos);
        
        
        },2000);
    })
   

export const  Itemlistconteiner =  () =>{
  
  const [productos, setProductos] =useState ([]);
  useEffect (()=> {
    
    obtenerProductos
    .then ((data)=>{
        setProductos (data);
    })
    .catch ((error)=>{
        console.log ("Hubo un error");
    })
    .finally (()=> {
        return (<h1>C</h1>)
    })
  }, [] )

  
  return (
<>

 

{productos.map ((producto)=> 

<h2 key={producto.id}>{producto.nombre} {producto.precio} {producto.img} </h2>,
)}



</>
  )
}