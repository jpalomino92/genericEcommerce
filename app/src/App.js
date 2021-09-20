import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
///import { Divider } from 'semantic-ui-react';
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';


//Views
import  Home  from './Views/Home/home';
import  ContactUs  from './Views/ContactUs/contactUs';
import  ItemDetailView  from './Views/ItemDetailView/itemDetailView';
import  Services  from './Views/Services/services';
import  Cart from './components/Cart/cart';
//Context
import  CartProvider from './context/cartContext'




class App extends React.Component{
  
  render(){
    return (
      <Router>
        <CartProvider>


          <NavBar />

          <Switch>

            <Route exact path="/"> 
              <Home />
            </Route>

            <Route path="/Services">.
              <Services/>
            </Route>

            <Route path="/category/:categoryName">  
              <Home />
            </Route>

            <Route path="/Products/:id">      
              <ItemDetailView />
            </Route>

            <Route path="/ContactUs">
              <ContactUs />
            </Route>

            <Route path="/Cart">
              <Cart />
            </Route>

          </Switch>

          </CartProvider>


     
              
      </Router>
    
      );
  };
};

export default App;