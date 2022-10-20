import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <ItemListContainer saludo={'Bienvenidos a mundo ropa'}/>
      </main>
      
    </>
  );
}

export default App;
