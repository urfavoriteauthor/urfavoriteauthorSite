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
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'


function App() {
  return (
       <Router>
    <div className="App">
      <Home/>
      <TransitionGroup>
<CSSTransition timeout={300} classNames='fade'>
    <Switch>
       
            <Route exact path='/' component={Home} />
            <Route path='/books' component={Books} />
            <Route path='/comics' component={Comics} />
            <Route path='/extra' component={Extra} />
            
      
    </Switch>
    </CSSTransition>
    </TransitionGroup>
    </div>
</Router>
  );
}

export default App;
