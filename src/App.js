import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  
  return (
    <div className="App">

      <header className="App-header">
      <NavBar />
      </header>
      <section>
        <ItemListContainer greeting="Aqui van los productos de otra galaxia" />
        <ItemDetailContainer/>
      </section>
    </div>
  );
}

export default App;
