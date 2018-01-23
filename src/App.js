import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Navigation from './components/Navbar'
class App extends React.Component {
    render() {
        return (
           <Router>
               <div>
                   <Navigation/>
                   <Route exact path="/" component={Home}/>
                   <Route exact path="/Login" component={Login}/>
               </div>
           </Router>
        );
    }
}

export default App;