import React from 'react';
import ReactDOM from 'react-dom';
import Home from './LandingPage';
import About from './About';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Showcase from './Showcase';
import Portfolio from './Portfolio';
import Finally from './Final';
import Nav from './Nav';

ReactDOM.render(
  <React.StrictMode>
    <Router>
           {/* <Route path="/" component={Imagehover}/> */}
           <Route exact path="/" component={Home}/>
           {/* <Route path="/" component={FirstOne}/> */}
           <Route path="/About" component={About}/>
           <Route path="/Showcase" component={Showcase}/>
           <Route path="/Portfolio" component={Portfolio}/>
           <Route path="/Final" component={Finally}/>
           <Route path="/Nav" component={Nav}/>
    </Router>

    {/* <Home/> */}
    {/* <FirstOne /> */}
    {/* <Imagehover /> */}
    {/* <Footer/> */}
    {/* <About/> */}
    {/* <Portfolio/> */}
    {/* <Nav/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
