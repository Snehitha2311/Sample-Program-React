import './App.css';
import React, { Component, Fragment } from 'react';
import { Form, Button, Card, Row, Col, Table } from 'react-bootstrap';


class Uncontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            id: '',
            email: '',
            state: '',
            gender: '',
            phoneNo: '',
            check: ''
        }
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.sapIdRef = React.createRef();
        this.emailRef = React.createRef();
        this.stateRef = React.createRef();
        // this.genderRef = React.createRef();
        this.maleRef = React.createRef();
        this.femaleRef = React.createRef();
        this.phoneNoRef = React.createRef();
        this.checkRef = React.createRef();
        // this.maleRef = React.createRef();
        // this.femaleRef = React.createRef();
    }

    value = () => {
        
        // console.log('---This.inputRef---', this.genderRef.current.value);
        
        // console.log('---This.inputRef---', this.checkRef.current.value);
        this.setState({
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            sapId: this.sapIdRef.current.value,
            email: this.emailRef.current.value,
            state: this.stateRef.current.value,
            // gender: this.genderRef.current.value,
            phoneNo: this.phoneNoRef.current.value,
            check: this.checkRef.current.value,
            gender: 'Male',gender: 'Female'
        })
    }

    render() {
        return (
            <div style={{backgroundColor: "pink"}}>
            <Fragment>
                <center>
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <cardTitle>Registraion Form UC</cardTitle>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text"
                                        ref={this.firstNameRef}
                                        placeholder="First Name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text"
                                        ref={this.lastNameRef}
                                        placeholder="Last Name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>SapId</Form.Label>
                                    <Form.Control type="text"
                                        ref={this.sapIdRef}
                                        placeholder="Sap Id" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email"
                                        ref={this.emailRef}
                                        placeholder="Email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." ref={this.stateRef}>
                                        <option>Select State</option>
                                        <option>Andhra Pradesh</option>
                                        <option>TamilNadu</option>
                                        <option>Karnata</option>
                                    </Form.Control>
                                </Form.Group>

                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={3}>
                                            Gender
                                        </Form.Label>
                                        <Col sm={10} >
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                ref={this.maleRef}
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check 
                                                type="radio"
                                                label="Female"
                                                ref={this.femaleRef}
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Mobile No</Form.Label>
                                    <Form.Control type="text"
                                        ref={this.phoneNoRef}
                                        placeholder="Phone No" />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" ref={this.checkRef} />
                                </Form.Group>
                                <Button variant="success" onClick={this.value} block>Submit</Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Table striped bordered hover style={{ height: '50px', width: '550px' }}>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>SapId</th>
                            <th>Email</th>
                            <th>State</th>
                            <th>Gender</th>
                            <th>Phone No</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.sapId}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.state}</td>
                            <td>{this.state.gender}</td>
                            <td>{this.state.phoneNo}</td>
                            <td>{this.state.check}</td>
                        </tr>
                    </tbody>
                </Table>
                </center>
            </Fragment>
            </div>
        )
    }
}

export default Uncontrolled;
