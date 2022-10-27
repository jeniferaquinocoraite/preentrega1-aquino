const productos = [{id : 1,
    img: "../../assets/ropa2.png",
    nombre: "Vestido verano",
    talle: 1,
    precio:500, 
    stock: 10,
    categoria: "verano" ,
    },
    {id: 2,
    nombre: "Bodys manga corta",
    talle: 1,
    img: "../imagenes/nenacatalogo/bodysvarios.jpg",
    precio:500,
    stock: 10,
    categoria: "verano"  ,

    },
    {id: 3,
    nombre  : "Vestido floral claro",
    img: "../imagenes/nenacatalogo/ropa-.png",
    talle: 2,
    precio:700,
    stock: 10,
    categoria: "verano" ,

    },
    {id :4,
    img: "../imagenes/nenacatalogo/barbieconjunto.jpg",
    nombre: "Jogging Barbie",
    talle: 12,
    precio:3000,
    stock: 10,
    categoria: "invierno" ,

    },
    {id : 5,
    nombre: "Conjunto Cisne",
    precio: 1500,
    img: "../imagenes/nenacatalogo/cisneconjunto.jpg",
    talle: 1,
    stock: 10,
    categoria: "invierno" ,

    },
    {id : 6,
    nombre: "Conjunto Conejo",
    precio:1500,
    img: "../imagenes/nenacatalogo/conejoconjunto.jpg",
    talle: 1,   
    stock: 10,
 
    },
    {id : 7,
    nombre: "Jogging Deportivo",
    precio:3500,
    img:"../imagenes/nenacatalogo/jogging.jpg", 
    talle:10,     
    stock: 10,

    },
    {id : 8,
        nombre: "Conjunto de 3 piezas",
        precio:3500,
        img:"../imagenes/nenacatalogo/marronconjunto.jpg", 
        talle:10,
        stock: 10,
        categoria: "verano" ,
    },
    {id : 9,
        nombre: "Conjunto Mariposa",
        precio:3500,
        img:"../imagenes/nenacatalogo/mariposa.jpg", 
        talle:2,
        stock: 10,

    }, 
    {id : 10,
        nombre: "Jogging Pepa Pig",
        precio:3500,
        img:"../imagenes/nenacatalogo/pepaconjunto.jpg", 
        talle: 10,
        stock: 10,
        categoria: "invierno" ,
    },
    ];
    export const data = new Promise((resolve, reject) => {
        let condition = true;
        setTimeout(() => {
          if (condition) {
            resolve(productos);
          } else {
            reject('salio mal');
          }
        }, 3000);
      });
       