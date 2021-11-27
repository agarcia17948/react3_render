
import './App.css';
import { Grid } from './components/Grid';
import Persons from './components/Persons/Persons';

function App() {
  return (

    <div className="App">
      <h1>Listado de peliculas</h1>
      <Grid/>
      <hr/>
      <Persons/>
    </div>
  );
}

export default App;
