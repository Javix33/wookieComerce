import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {ItemCategory} from "./components/ItemCategory/ItemCategory.js";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <section className='MainContainer'>
          <Routes>
            <Route path='/' element=
            {
                <h1 className='HomeTitle'>
                  Selecciona una categoria.
                </h1>
            }/>
            
            <Route path='/Wookies' element={
              <ItemCategory sublinea="Wookies"/>
            }/>
            <Route path='/MosEisley' element={
              <ItemCategory sublinea="Mos Eisley"/>
            }/>
            <Route path='/Mandalorian' element={
              <ItemCategory sublinea="Mandalorian"/>
            }/>
             <Route path='/Troopers' element={
              <ItemListContainer greeting="bienvenido a la Categoria Troopers" />
            }/>
            
          </Routes>
          </section>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
