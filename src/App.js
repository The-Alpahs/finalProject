import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Login from './components/login.component';
import Signup from './components/signup.component';
import Search from './components/search.component';
import Result from './components/result.component';
import Home from './components/home.component';
import Prediction from './components/prediction.component';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container center">
        <nav className="nav">
            <h3 className="">App by team The Alphas</h3>

            <div className="menu__right">
                <ul className="menu__list">
                
                    <li className="menu__list-item">
                    <Link to={"/home"} class="nav-Link" >
                    Home
                    </Link></li>
                    <li className="menu__list-item"><Link to={"/signup"} class="nav-Link">
                      Sign Up
                    </Link></li>
                    <li className="menu__list-item">
                    <Link to={"/login"} class="nav-Link">Log In
                    </Link></li>
                    <li className="menu__list-item"><Link to={"/search"} class="nav-Link">
                      Search
                    </Link></li>
                    <li className="menu__list-item">
                    <Link to={"/prediction"} class="nav-Link">
                    See Predicted Results</Link></li>
                </ul>

              </div>
            </nav>
          </div>



          
        {/* <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar=brand">
              <h3>App by team The Alphas </h3>
            </Link>
            <div
              className="form-group"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" >
                  <Link to={"/home"} class="nav-Link" >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/login"} class="nav-Link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/signup"} class="nav-Link">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/search"} class="nav-Link">
                    Search
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/result"} class="nav-Link">
                    Result
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/prediction"} class="nav-Link">
                    See predicted prices
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <h2>Welcome to Restaurant Menu Generator App</h2>
          <br />
           </div> */
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/prediction" component={Prediction} />
          </Switch>
        }
      </Router>
    );
  }
}

 export default App;

