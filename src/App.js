import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import Vehicles from './Vehicles';
import About from './About';
import Tracks from './Tracks';
import {BrowserRouter,Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        
          <Route path="/about" exact component={About} />
          <Route path="/tracks" exact component={Tracks} />
          <Route path="/vehicles" exact component={Vehicles} />
        
      </BrowserRouter>
    </div>
  );
}



export default App;
