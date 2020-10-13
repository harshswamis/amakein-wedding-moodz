import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Categories from './Components/Pages/Categories';
import Stories from './Components/Pages/Stories';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/contactus" component={ContactUs} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
