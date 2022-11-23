
import './App.css';
import Navbar from "./components/NavBar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
      <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/"><News pageSize={6}  key="general" country="in" catagory="general"/></Route>
          <Route exact path="/business"><News pageSize={6} key="business" country="in" catagory="business"/></Route>
          <Route exact path="/entertainment"><News pageSize={6} key="entertainment" country="in" catagory="entertainment"/></Route>
          <Route exact path="/general"><News pageSize={6} country="in" key="general" catagory="general"/></Route>
          <Route exact path="/health"><News pageSize={6} country="in"  key="health" catagory="health"/></Route>
          <Route exact path="/science"><News pageSize={6} country="in" key="science" catagory="science"/></Route>
          <Route exact path="/sports"><News pageSize={6} country="in" key="sports" catagory="sports"/></Route>
          <Route exact path="/technology"><News pageSize={6} country="in" key="technology" catagory="technology"/></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
