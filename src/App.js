import './App.css';
import ButtonAppBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={
      <div>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </div>
    }>
    </Route>
  
    <Route exact path="/vehiculos" element={
      <div>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </div>
    }>
    </Route>
    <Route exact path="/electronica" element={
      <div>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </div>
    }>
    </Route>
    <Route exact path="/libros" element={
      <div>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </div>
    }>
    </Route>
    <Route exact path="/detalle" element={
      <div>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemDetailContainer></ItemDetailContainer>
        </header>
      </div>
    }>
    </Route>
   
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
