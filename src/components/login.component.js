import React, { Component } from "react";
//  import Form from "react-bootstrap/Form";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./search.component";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
      email: "",
      password: "",
    };
  }

 

  onChangePersonEmail(values) {
    this.setState({
      email: values.target.value,
    });
  }

  onChangePersonPassword(values) {
    this.setState({
      password: values.target.value,
    });
  }

  onSubmit(values) {
    // e.preventDefault();
    let obj = {
      
      email: values.email,
      password: values.password,
    };

    console.log(values.email);

    console.log(obj);

    axios
      .post("http://localhost:8080/log", obj)
      .then((res) => {
        if (res.data.length === 1){
          console.log(res.data.length===1)
          alert(`Log in sucess`)
        }else{
          alert(`Log in False Check Your Email or Password`)
        }
      }
      
      
      
      
      );

    this.setState({
      
      email: "",
      password: "",
    });

    //condition...........
    //toast.error("Entered Successfully");
  }

  componentDidMount() {}

  render() {
    let {  email, password } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Login Form</h3>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />

        <Formik
          initialValues={{  email, password }}
          onSubmit={this.onSubmit}
          //  validateOnChange={false}
          //  validateOnBlur={false}
        >
          {(props) => (
            <Form>
              

              <div className="form-group">
                <label>Email </label>
                <Field className="form-control" type="text" name="email" />
              </div>

              <div className="form-group">
                <label>Password </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <Link to={"/search"} class="btn btn-primary" >
                  <input type="submit" value="login" />
                </Link>
              </div>
            </Form>
          )}
        </Formik>

        

        <Switch>
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}
