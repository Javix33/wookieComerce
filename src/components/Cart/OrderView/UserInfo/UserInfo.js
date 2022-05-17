import React, { useContext} from 'react';
import CartContext from '../../../Context/CartContext';
import "./UserInfo.css"


const UserInfo=(props)=>{
    const {userData,setUserData}=useContext(CartContext)
   

    const handleInputChange = (event) => {
        
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        
        
    }

    return (
        <div className='FormContainer'>
            <h1 className='FormTitle'>Introduce tus datos</h1>
            <form  onSubmit={enviarDatos}>
                <div className='InputContainer'>
                    <input className='Input' type="text" placeholder="Nombre completo" onChange={handleInputChange}name="name" required></input>
                
                    <input className='Input' type="number" placeholder="Telefono" onChange={handleInputChange} name="phone" required></input>
                
                    <input className='Input' type="correo electronico" placeholder="email" onChange={handleInputChange} name="email" required></input>
                </div>
                <button className='FormSubmit' type="submit" onClick={()=>props.terminarCompra()}>Procesar compra</button>
            </form>

           
        </div>
    );
}
 
export default UserInfo;
