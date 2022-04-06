const products = [{
    id: 1,
    title: "Red Trooper",
    price: 120,
    sublinea: "Troopers",
    stock: 10,
    descripcion: "Sabor tutsi pop",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/red2.jpg"
  },
  {
    id: 2,
    title: "Pink Trooper",
    price: 120,
    sublinea: "Troopers",
    stock: 10,
    descripcion: "Sabor algodón de azucar",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/pink1.jpg"
  },
  {
    id: 3,
    title: "Green Trooper",
    price: 120,
    sublinea: "Troopers",
    stock: 10,
    descripcion: "Sabor cocktel citrico",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg"
  }
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
};