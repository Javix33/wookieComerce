const products = [{
    id: 1,
    title: "Red Trooper",
    price: 120,
    category: "Troopers",
    stock: 10,
    descripcion: "Sabor tutsi pop",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/red2.jpg",
    tamaño: 30
  },
  {
    id: 2,
    title: "Pink Trooper",
    price: 120,
    category: "Troopers",
    stock: 10,
    descripcion: "Sabor algodón de azucar",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/pink1.jpg",
    tamaño: 30
  },
  {
    id: 3,
    title: "Green Trooper",
    price: 120,
    category: "Troopers",
    stock: 10,
    descripcion: "Sabor cocktel citrico",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  },
  {
    id: 4,
    title: "Lucky wookie",
    price: 120,
    category: "Wookies",
    stock: 10,
    descripcion: "Sabor dulce de bayas",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  },
  {
    id: 5,
    title: "Grogu",
    price: 120,
    category: "Mandalorian",
    stock: 10,
    descripcion: "Sabor chicle de menta",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  },
  {
    id: 6,
    title: "Abrax",
    price: 120,
    category: "MosEisley",
    stock: 10,
    descripcion: "Sabor furtos rojos y ginger ale",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  },
  {
    id: 7,
    title: "Blukie",
    price: 120,
    category: "Wookies",
    stock: 10,
    descripcion: "Sabor dulce de bayas",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  },
  {
    id: 8,
    title: "Coaxium",
    price: 120,
    category: "Mandalorian",
    stock: 10,
    descripcion: "Sabor bebida energetica",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  },
  {
    id: 9,
    title: "Raava",
    price: 120,
    category: "MosEisley",
    stock: 10,
    descripcion: "Sabor chicle de menta",
    image: "https://javix33.github.io/wookie/resources/imagenes/productos/green.jpg",
    tamaño: 30
  }
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 0)
  })
};
export const getProductsById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(product => product.id == id))
    }, 0)
  })
};
export const getProductsByCategory = (category) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === category))
    }, 0)
  })
};