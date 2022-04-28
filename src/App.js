
import './css/styles.css';
import ButtonAppBar from './components/Nav/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/itemDetails/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import { CustomProvider } from './components/Cart/CartContext';
function App() {
  
  return (
    <CustomProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path="/curso-React-" element={
      <>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </>
    }>
    </Route>
  
    <Route exact path="/curso-React-/category/:categoryId" element={
      <>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemListContainer/>
        </header>
      </>
    }>
    </Route>
  
    <Route exact path="/curso-React-/item/:Id" element={
      <>
        <ButtonAppBar/>
       <header className="App-header">
          <ItemDetailContainer></ItemDetailContainer>
        </header>
      </>
    }>
    </Route>
    
    <Route exact path="/curso-React-/cart" element={
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
