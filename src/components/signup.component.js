import React, { Component } from "react";
//  import Form from "react-bootstrap/Form";
import {Link, Switch, Route} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './search.component';
import { Formik, Form, Field, ErrorMessage } from "formik";



export default class Signup extends Component {
                 constructor(props) {
                   super(props);
                   this.onChangePersonName = this.onChangePersonName.bind(this);
                   this.onChangePersonEmail = this.onChangePersonEmail.bind(
                     this
                   );
                   this.onChangePersonPassword = this.onChangePersonPassword.bind(
                     this
                   );

                   this.onSubmit = this.onSubmit.bind(this);

                   this.state = {
                     fullName: "",
                     email: "",
                     password: "",
                   };
                 }

                 onChangePersonName(e) {
                   this.setState({
                     fullName: e.target.value,
                   });
                 }

                 onChangePersonEmail(e) {
                   this.setState({
                     email: e.target.value,
                   });
                 }

                 onChangePersonPassword(e) {
                   this.setState({
                     password: e.target.value,
                   });
                 }

                 onSubmit(values) {
                   // e.preventDefault();
                   let obj = {
                     fullName: values.fullName,
                     email: values.email,
                     password: values.password,
                   };

                   console.log(values.fullName);

                   console.log(obj);

                   axios
                     .post("http://localhost:8080/user", obj)
                     .then((res) => console.log(res.data));

                   this.setState({
                     fullName: "",
                     email: "",
                     password: "",
                   });

                   //condition...........
                   //toast.error("Entered Successfully");
                 }

                 componentDidMount() {
                
                 }


                 render() {
                   let { userName, email, password } = this.state;
                   return (
                     <div style={{ marginTop: 10 }}>
                       <h3>Signup Form</h3>
                       <ToastContainer position={toast.POSITION.TOP_RIGHT} />

                       <Formik
                         initialValues={{ userName, email, password }}
                         onSubmit={this.onSubmit}
                         //  validateOnChange={false}
                         //  validateOnBlur={false}
                       >
                         {(props) => (
                           <Form>
                             <div className="form-group">
                               <label>Name </label>
                               <Field
                                 type="text"
                                 name="fullName"
                                 className="form-control"
                               />
                             </div>

                             <div className="form-group">
                               <label>Email </label>
                               <Field
                                 className="form-control"
                                 type="text"
                                 name="email"
                               />
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
                                 <input type="submit" value="signup" />
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
