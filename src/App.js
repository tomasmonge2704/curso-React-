import './App.css';
import ButtonAppBar from './components/NavBar';
import ItemCount from './components/ItemCount';



function App() {
  
  return (
    
    <div>
    <ButtonAppBar/>
    
    
      <header className="App-header">
        
      
    <ItemCount stock="5" initial="1"/>
    
      </header>
    </div>
   
  );
}

export default App;
