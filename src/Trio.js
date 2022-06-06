import React from 'react';
import ReactDOM from 'react-dom';
import FirstOne from './FirstOne';
import Imagehover from './Imagehover';
import Home from './LandingPage';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
           <Route path="/" component={Imagehover}/>
           <Route path="/" component={Home}/>
           <Route path="/" component={FirstOne}/>
           <Route path="/About" component={About}/>
    </Router> */}

    <Home/>
    <FirstOne />
    <Imagehover />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();