import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import  Cart from './components/Cart/cart';
import CheckOut from './components/CheckOut/CheckOut'


//Views
import  Home  from './Views/Home/home';
import  ItemDetailView  from './Views/ItemDetailView/itemDetailView';
//Context
import  CartProvider from './context/cartContext'




function App() {
    return (
      <CartProvider>
        <Router>
            <NavBar />
            <Switch>
              <Route exact path="/"> 
                <Home />
              </Route>

              <Route path="/category/:categoryName">  
                <Home />
              </Route>

              <Route path="/Products/:id">      
                <ItemDetailView />
              </Route>

              <Route path="/Cart">
                <Cart />
              </Route>

              <Route path="/CheckOut">
                <CheckOut />
              </Route>

            </Switch>
        </Router>
      </CartProvider>
    
      );
};

export default App;