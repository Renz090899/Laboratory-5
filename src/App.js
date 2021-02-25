import React from 'react';
import Navigator from "./Navigator.jsx";
import Body from "./Body.jsx";
import Body2 from "./Body2.jsx";
import Body3 from "./Body3.jsx";
import Body4 from "./Body4.jsx";
import Body5 from "./Body5.jsx";
import Body6 from "./Body6.jsx";
import Body7 from "./Body7.jsx";
import './body.css';
import './index.css';


function App() {
  return (
    <div>
      <Navigator></Navigator>
    <div>
    <h1 className = "heading1" style = {{alignContent: 'center'}}>STORY</h1>
      <Body></Body>
    </div>
    <div>
      <h1 className = "heading2">ABOUT</h1>
      <Body2></Body2>
    </div>
    <div>
      <h1 className = "heading2">U.A HIGH SCHOOL</h1>
      <Body3></Body3>
    </div>
    <div>
      <h1 className = "heading2">U.A STUDENT</h1>
      <Body4></Body4>
    </div>
    <div>
      <h1 className = "heading2">PRO HEROES</h1>
      <Body5></Body5>
    </div>
    <div>
    <h1 className = "heading2">VILLAINS</h1>
      <Body6></Body6>
    </div>
    <div>
    <h1 className = "heading2">MY HERO ACADEMIA TRAILER</h1>
      <Body7></Body7>
    </div>
    </div>
    
  );
}

export default App;
