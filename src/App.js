import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';




function App() {
  
  return (
    
    <div>
    <ButtonAppBar>
      
    </ButtonAppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
      </header>
    </div>
   
  );
}

export default App;
