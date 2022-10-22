import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemCount from './components/Itemlistcontainer/ItemCount';

function App() {
  return (
    <>
      <Header/>
      <main>
        <ItemListContainer saludo={'Bienvenidos a mundo ropa'}/>
        <ItemCount stock={10} initial={0}/>
      </main>
      
    </>
  );
}

export default App;
