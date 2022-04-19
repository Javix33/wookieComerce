import { Item } from "./Item/Item.js";

export const ItemList = ({ products }) => {

    return (
      products.map(product => < Item key = { product.id } {...product }
        />)  
      )
    }