const products = [{
    id: 1,
    title: "Red Trooper",
    price: 120,
    sublinea: "Troopers",
    stock: 10,
    descripcion: "Sabor tutsi pop",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/red2.jpg",
    tamaño: 30
  },
  {
    id: 2,
    title: "Pink Trooper",
    price: 120,
    sublinea: "Troopers",
    stock: 10,
    descripcion: "Sabor algodón de azucar",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/pink1.jpg",
    tamaño: 30
  },
  {
    id: 3,
    title: "Green Trooper",
    price: 120,
    sublinea: "Troopers",
    stock: 10,
    descripcion: "Sabor cocktel citrico",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  }
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
};
export const getProductsById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(product => product.id == id))
    }, 2000)
  })
};