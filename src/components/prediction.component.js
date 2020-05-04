import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

export default class Prediction extends Component {
  
    render() {
        return (

            <div style={{ marginTop: 10 }}>
            <h3>App_Name</h3>
            <h5>Pizza Prediction</h5>
            <Form>
                <table>
                <tr>
                    <th>Pizza type</th>
                    <th>Current Price</th>
                    <th>Price in....</th>
                </tr>
                <tr>
                    <td>....</td>
                    <td>......</td>
                    <td>....</td>
                </tr>
                </table>
            </Form>


            
            </div>
        );
    }
} 
