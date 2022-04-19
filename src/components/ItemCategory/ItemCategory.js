import "./ItemCategory.css";

export const ItemCategory= (props)=>{
  return(
    <h1 className="CategoryTitle">
      La categoria {props.sublinea} aun no cuenta con productos que mostrar.
    </h1>
  )
}