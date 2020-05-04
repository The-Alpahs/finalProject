import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Result extends Component {
  
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>App_Name</h3>

        <Form>

        <div className="form-group">
          <label>Current Price : </label>
          <br></br>
          <input type="text"
            />
        </div>

        <div className="form-group">
          <label>Predicted Price : </label>
          <br></br>
          <input type="text"
            />
        </div>

        </Form>
      </div>
    );
  }
}
