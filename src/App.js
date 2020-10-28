import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Switch, Route, Redirect} from "react-router-dom";
import Categories from './Components/Pages/Categories';
import Stories from './Components/Pages/Stories';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import NavBar from "./Components/NavBar";
import Footer from './Components/Footer';
import FAQs from "./Components/Pages/FAQs";



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      // backgroundImage : `url(${HomeBackground})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      homePath : "/",
      categoriesPath : "/categories",
      storiesPath : "/stories",
      contactUsPath : "/contactus",
      faqPath: "/faq"
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick = image => {
        this.setState({backgroundImage : image})
  }

  componentDidMount() {

  }


render() {

  const mystyle = {
    backgroundColor: "DodgerBlue",
  };

  return (
    <div className="App">
      
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/stories" component={Stories} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/FAQs" component={FAQs} />
      <Redirect to="/" />
      </Switch>
      <Footer />
      
    </div>
  )
}
}

export default App;