import React from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import Collection from "./components/pages/Collection"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Switch>
        <Route path="/collection" exact component={Collection}/>
      </Switch>
    </Router>
  );
}

export default App;
