import './App.css';
import Header from './components/Header/Header';
import ItemDatailContaiener from './components/Itemlistcontainer/ItemDetailContainer';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element= {<ItemListContainer saludo={'Bienvenidos a mundo ropa'}/>}/>
          <Route path='/category/:id' element= {<ItemListContainer saludo={'Bienvenidos a mundo ropa'}/>}/>
          <Route path='/item/:id' element={<ItemDatailContaiener/>}/>
        </Routes>
      </main>   
    </BrowserRouter>
  );
}

export default App;
