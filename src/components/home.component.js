import React, { Component } from "react";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link, Switch, Route} from "react-router-dom";
import axios from "axios";
import Login from './login.component';
import Signup from './signup.component';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangeSignup = this.onChangeSignup.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    

    this.state = {
      search : " ",
      person_signup: " ",
    };
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }

  onChangeSignup(e) {
    this.setState({
      person_signup: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // const obj = {
    //   search: this.state.search,
    //   person_signup: this.state.person_signup,
    // };

    axios
      .post("http://localhost:4000/person/add, obj")
      .then((res) => console.log(res.data));

    this.setState({
      search: " ",
      person_signup: " ",
    });
  }

  render() {
    return (
      <div className="button">
       <Link to={"/login"}  >
        <Button
          variant="primary"
          value={this.state.search}
          onChange={this.onChangeSearch}
          size="lg"
          block
        >
          Login
        </Button>
        </Link>

        <br></br>
        
        <Link to={"/signup"}  >
        <Button
          variant="secondary"
          value={this.state.person_signup}
          onChange={this.onChangeSignup}
          size="lg"
          block
        >
          Signup
        </Button>
        </Link>

        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}
