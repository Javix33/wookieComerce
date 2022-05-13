import React, {Fragment, useState, useContext} from 'react';
import CartContext from '../../../Context/CartContext';
import "./UserInfo.css"


const UserInfo=()=>{
    const {userData,setUserData}=useContext(CartContext)
   

    const handleInputChange = (event) => {
         console.log(event.target.name)
        console.log(event.target.value)
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(userData)
        
    }

    return (
        <div className='FormContainer'>
            <h1 className='FormTitle'>Introduce tus datos</h1>
            <form  onSubmit={enviarDatos}>
                <div className='InputContainer'>
                    <input className='Input' type="text" placeholder="Nombre completo" onChange={handleInputChange}name="name" ></input>
                
                    <input className='Input' type="number" placeholder="Telefono" onChange={handleInputChange} name="phone"></input>
                
                    <input className='Input' type="correo electronico" placeholder="email" onChange={handleInputChange} name="email"></input>
                </div>
                <button className='FormSubmit' type="submit">Enviar datos</button>
            </form>
           
        </div>
    );
}
 
export default UserInfo;
