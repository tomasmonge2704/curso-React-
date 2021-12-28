import './App.css';
import ButtonAppBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalContainer';
function App() {
 
  return (
    
    <div>
    <ButtonAppBar/>
    
    
      <header className="App-header">
        
      <ItemListContainer/>
     <ItemDetailContainer/>
    
      </header>
    </div>
   
  );
}

export default App;
