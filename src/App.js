import React from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
