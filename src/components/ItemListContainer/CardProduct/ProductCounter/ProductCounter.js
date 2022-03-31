import "./ProductCounter.css";

const ProductCounter=(props)=>{
  return(
    <div className="CounterCard">
      <p className="SignosCounter">
        +
      </p>
      <p className="Mesage">
        Añadir {props.counter} productos al carrito.
      </p>
      <p className="SignosCounter">
        -
      </p>
    </div>
  );
};
export default ProductCounter;