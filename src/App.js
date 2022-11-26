import './App.css';
import ItemDatailContaiener from './components/Itemlistcontainer/ItemDetailContainer';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element= {<ItemListContainer saludo={'Bienvenidos a MundoRopa'}/>}/>
            <Route path='/category/:id' element= {<ItemListContainer saludo={'Bienvenidos a MundoRopa'}/>}/>
            <Route path='/item/:id' element= {<ItemDatailContaiener/>}/>
            <Route path='/cart' element= {<Cart/>}/> 
            <Route path='checkout' element={<Checkout/>}/>
          </Routes>
        </main>
        <Footer/>   
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
