import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ItemCategoryContainer from "./components/ItemCategoryContainer/ItemCategoryContainer.js";
import {CartContextProvider} from "./components/Context/CartContext";

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
            
            <Route path='/:ProductCategory' element=
            {
              <ItemCategoryContainer/>
            }/>
            <Route path='/detail/:ProductId' element={
              <ItemDetailContainer/>
            } />
            
          </Routes>
          </section>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
