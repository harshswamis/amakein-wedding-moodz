import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import Categories from './Components/Pages/Categories';
import Stories from './Components/Pages/Stories';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';
import FAQs from "./Components/Pages/FAQs";

import HomeBackground from "./Components/Images/background-1.jpg"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      backgroundImage : ``,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      homePath : "/",
      categoriesPath : "/categories",
      storiesPath : "/stories",
      contactUsPath : "/contactus",
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick = image => {
        this.setState({backgroundImage : image})
  }

  componentDidMount() {
    this.setState({backgroundImage : `url(${HomeBackground})`})
  }

render() {

  const mystyle = {
    backgroundColor: "DodgerBlue",
  };

  return (
    <div className="App" style={this.state}>
      <NavBar path={this.state} handleClick={this.handleClick}/>
      <Switch>
        <Route exact path={this.state.homePath} component={Home} />
        <Route exact path={this.state.categoriesPath} component={Categories} />
        <Route exact path={this.state.storiesPath} component={Stories} />
        <Route exact path={this.state.contactUsPath} component={ContactUs} />
        <Route exact path="/faqs" component={FAQs} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}
}

export default App;