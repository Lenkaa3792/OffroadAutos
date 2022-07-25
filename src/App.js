import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import Vehicles from './Vehicles';
import About from './About';
import Tracks from './Tracks';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Tracks />
    </div>
  );
}

export default App;
