import React, {Component}from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Components/Container"
import Gallery from "./Components/Gallery"
import Contact from "./Components/Contact"
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img2:"https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&h=220&w=120"
         }
    }
    render() { 
        return ( 
             <Router>
        <div className="Nav-bar">
            <nav className="App-nav">
            <ul>
                <li><Link className="links" to={'/'}>Home</Link></li>
                <li><Link className="links" to={'/Contact'}>Contact</Link></li>
                <li><Link className="links" to={'/Gallery'}>Gallery</Link></li>
            </ul>
        </nav>
        <hr/>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/Contact'} component={Contact}/>
            <Route path={'/Gallery'} component={Gallery}/>
        </Switch>
        </div>
      </Router>
         );
    }
}
 
export default App;
