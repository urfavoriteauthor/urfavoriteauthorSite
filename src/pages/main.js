import React from 'react';
import Home from './pages/home'
import './App.css';
import Cards from './components/cards'
import Feature from './components/featureCard'
import Books from './pages/books'
import Navbar from './components/navbar'
import Comics from './pages/comics'
import Extra from './pages/extra'

import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';


function Main() {
  document.title="URFAVORITEAUTHOR"
  return (
    <Router>
    <div className="main">
    <Switch>
       
            <Route exact path='/home' component={Home} />
            <Route path='/books' component={Books} />
            <Route path='/comics' component={Comics} />
            <Route path='/extra' component={Extra} />
            
      
    </Switch>
    </div>
</Router>
  );
}

export default Main;
