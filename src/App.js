import Navbar from "./components/navbar";
import './App.css';
import Alerta from "./components/alerta";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Alerta name='Martin' />
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
