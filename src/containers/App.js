import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path='/'/>
        <Route exact path='/actors'/>
        <Route exact path='/directors'/>
        <Route exact path='/movies'/>
        {/*{code here}*/}
      </React.Fragment>
    </Router>
  );
};

export default App
