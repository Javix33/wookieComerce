import "./ItemCount.css";
import {useState} from 'react';

const ItemCount=(props)=>{
    const [count, countFunction] = useState(0);
    const add=()=>{
      if (count < props.stock){
      countFunction(count +1);
    };
  };

    const min =()=>{
      if(count>0){
      countFunction(count-1);
    };
  };
  return(
    <div className="CounterCard">
      <button onClick={add} className="SignosCounter">
        +
      </button>
      <p className="Mesage">
        Añadir {count} productos al carrito.
      </p>
      <button onClick={min} className="SignosCounter">
        -
      </button>
      <button className="ButtonAdd" onClick={()=>{props.onAdd(count)}}>
        Añadir al carrito
      </button>
    </div>
  );
  };
export default ItemCount;