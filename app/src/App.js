import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
///import { Divider } from 'semantic-ui-react';
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';


//Views
import  Home  from './Views/Home/home';
import  ContactUs  from './Views/ContactUs/contactUs';
import  ItemDetailView  from './Views/ItemDetailView/itemDetailView';
import  Products  from './Views/Products/products';
import  Services  from './Views/Services/services';
import  Cart from './components/Cart/cart';


const head = "Generic Ecommerce";

class App extends React.Component{
  
  render(){
    return (
      <Router>

          <NavBar />

          <Switch>

            <Route exact path="/"> 
              <Home />
            </Route>

            <Route path="/Services">
            <h1>servicios</h1>
            </Route>

            <Route path="/category/:categoryName">  
              <Home />
            </Route>

            <Route path="/Products/:id">      
            <ItemDetailView />
            </Route>

            <Route path="/ContactUs">
              <h1> Contact us </h1>
            </Route>

            <Route path="/Cart">
              <Cart />
            </Route>

          </Switch>

     
              
      </Router>
    
      );
  };
};

export default App;