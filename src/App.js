import './App.css';
import ButtonAppBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import { CustomProvider } from './components/CartContext';
function App() {
  
  return (
    <CustomProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={
      <>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </>
    }>
    </Route>
  
    <Route exact path="/category/:categoryId" element={
      <>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </>
    }>
    </Route>
  
    <Route exact path="/item/:Id" element={
      <>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemDetailContainer></ItemDetailContainer>
        </header>
      </>
    }>
    </Route>
    
    <Route exact path="/cart" element={
      <>
        <ButtonAppBar/>
       <header>
        
          <Cart/>
          
        </header>
      </>
    }>
    </Route>
    
      </Routes> 
    </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
