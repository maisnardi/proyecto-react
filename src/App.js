import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemCount from './components/Itemlistcontainer/ItemCount';

function App() {
  const onAdd = (cantidad)=>{
    console.log(`Se agregaron ${cantidad} productos al carrito`)
  }
  return (
    <>
      <Header/>
      <main>
        <ItemListContainer saludo={'Bienvenidos a mundo ropa'}/>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      </main>
      
    </>
  );
}

export default App;
