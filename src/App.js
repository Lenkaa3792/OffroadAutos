import logo from "./logo.svg";
import { useEffect,useState } from "react";

import "./App.css";
import { Nav } from "./Nav";
import Vehicles from "./Vehicles";
import About from "./About";
import Tracks from "./Tracks";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function App ()
{
  const [offroad,setOffroad] = useState('');
  useEffect(() => {
    fetch("http://localhost:3000/AutoOffroads")
      .then((response) => response.json())
      .then( ( data ) =>
      {
        console.log(data)
        setOffroad(data);
      });
  }, []);
  
  

  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/tracks" exact component={Tracks} />
        <Route path="/vehicles" exact component={Vehicles} />
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  <div>
    <h1>Home</h1>
  </div>;
};

export default App;
