import './App.css';
import Header from './components/Header/Header';
import ItemDatailContaiener from './components/Itemlistcontainer/ItemDetailContainer';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ItemFilter from './components/Itemlistcontainer/ItemFilter';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Itemlistcontainer/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element= {<ItemListContainer saludo={'Bienvenidos a MundoRopa'}/>}/>
            <Route path='/category/:id' element= {<ItemListContainer saludo={'Bienvenidos a MundoRopa'}/>}/>
            <Route path='/category/:id' element= {<ItemFilter/>}/>
            <Route path='/size/:size' element= {<ItemListContainer/>} />
            <Route path='/size/:size' element= {<ItemFilter/>}/>
            <Route path='/item/:id' element= {<ItemDatailContaiener/>}/>
            <Route path='/cart' element= {<Cart/>}/> 
            <Route path='checkout' element={<Checkout/>}/>
          </Routes>
        </main>   
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
