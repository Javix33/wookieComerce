import CardProduct from "./CardProduct/CardProduct";
import "./ItemListContainer.css";
import Construction from "./siteConstruction.jpg";

const ItemListContainer=(props)=>{
  return(
    <article>
      <h1 className="TitleMain">
        {props.greeting}
      </h1>
    <img className="Construction" src={Construction} alt="sitio en construccion" />
    <CardProduct product="Lucky wookie" stock="10" />
    </article>
  );
};
export default ItemListContainer