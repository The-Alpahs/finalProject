import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Result from './result.component';
import {Router, Route, Link, Switch} from "react-router-dom";
export default class Search extends Component {

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>App_Name</h3>
        
        <Form>
          <div className="label">
          <label>Enter the pizza name</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="budget"
            />
          </div>

        


         
          <div className="form-group">
          <Link to={"/result"} class="nav-Link" >
            <input type="submit" value="Search" />
  </Link>
          </div>
          <Switch>
            <Route exact path="/result" component={Result} />
            </Switch>
        </Form>
       
        
      </div>
    );
  }
}

