import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About';
// import Post from './components/Formulario';
import Navbar from './components/Navbvar';
import { Post } from './components/Post';
 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About}/>\
          <Route path="/" component={Post}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
