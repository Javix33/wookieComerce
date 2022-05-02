import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {CartContextProvider} from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart"

function App() {
  
  return (
    <div className="App">
      <CartContextProvider >
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <section className='MainContainer'>
          <Routes>
            <Route path='/' element=
            {
                <Link to="/Tienda" className='ButtonStore'>
                Abrir la tienda
                </Link>
            }/>
            <Route path='/Tienda' element=
            {
              <ItemListContainer greeting="bienvenido a la tienda wookie" />
            }/>
            
            <Route path='/:CategoryId' element=
            {
              <ItemListContainer/>
            }/>
            <Route path='/detail/:ProductId' element={
              <ItemDetailContainer/>
            } />
            <Route path='/Cart' element={<Cart/>} />
            
          </Routes>
          </section>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
