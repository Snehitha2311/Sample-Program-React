import './App.css';
import React, { Component, Fragment } from 'react';
import { Form, Button, Card, Row, Col, Table, Tab } from 'react-bootstrap';

class Controlled extends Component {
    render() {
        return (
            <Fragment>
                <h2>Registraion Form</h2>
                <Table striped bordered hover variant="dark" style={{ width: '500px', marginLeft: '700px' }}>
                    <thead>
                        <tr>
                            {/* <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>First Name</td>
                            <td>{this.state.firstName}</td>

                        </tr>
                        <tr>
                            {/* <th scope="row">2</th> */}
                            <td>Last Name</td>
                            <td>{this.state.lastName}</td>

                        </tr>
                        <tr>
                            {/* <th scope="row">3</th> 
                        <td colspan="2">Larry the Bird</td>  */}
                            <td>Sap Id</td>
                            <td>{this.state.id}</td>
                        </tr>
                        <tr>
                            {/* <th scope="row">2</th>  */}
                            <td>Email Id</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            {/* <th scope="row">2</th> */}
                            <td>Phone No</td>
                            <td>9640198005</td>
                        </tr>
                        <tr>
                            {/* <th scope="row">2</th> */}
                            <td>DOB</td>
                            <td>23-11-1998</td>
                        </tr>
                        <tr>
                            {/* <th scope="row">2</th>  */}
                            <td>Address</td>
                            <td>Nellore</td>
                        </tr>
                        <tr>
                            {/* <th scope="row">2</th>  */}
                            <td>State</td>
                            <td>{this.state.state}</td>
                        </tr>
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}
export default Controlled;