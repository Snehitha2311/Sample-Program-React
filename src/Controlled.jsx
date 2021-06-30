import './App.css';
import React, { Component, Fragment } from 'react';
import { Form, Button, Card, Row, Col, Table } from 'react-bootstrap';
import Uncontrolled from './Uncontrolled';

class Controlled extends Component {
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
      languages: ''
    }
  }

  handleChange = (e) => {
    this.setState({ firstName: e.target.value });
  }
  handleChange1 = (e) => {
    this.setState({ lastName: e.target.value });
  }
  handleChange2 = (e) => {
    this.setState({ id: e.target.value });
  }
  handleChange3 = (e) => {
    this.setState({ email: e.target.value });
  }
  handleChange4 = (e) => {
    this.setState({ state: e.target.value });
  }
  handleChange5 = (e) => {
    this.setState({ gender: e.target.value });
  }
  handleChange6 = (e) => {
    this.setState({ phoneNo: e.target.value });
  }
  handleChange7 = (e) => {
     this.setState({ languages: 'Accept'});
    //this.setState({languages: e.target.checked})
  }

  render() {
    return (
      <Fragment>
        <div style={{backgroundColor: "pink"}}>
        <center>
        <h2>Registraion Form</h2>
        <Table striped bordered hover variant="dark" style={{ width: '500px'}}>
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
              <td>First Name</td>
              <td>{this.state.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{this.state.lastName}</td>
            </tr>
            <tr>
              <td>Sap Id</td>
              <td>{this.state.id}</td>
            </tr>
            <tr>
              <td>Email Id</td>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{this.state.state}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{this.state.gender}</td>
            </tr>
            <tr>
              <td>Mobile No</td>
              <td>{this.state.phoneNo}</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>{this.state.languages}</td>
            </tr>

          </tbody>
        </Table>

        <Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange1} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>SapId</Form.Label>
                  <Form.Control type="text"
                    placeholder="Sap Id"
                    value={this.state.id}
                    onChange={this.handleChange2} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange3} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." value={this.state.state} onChange={this.handleChange4}>
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
                    <Col sm={10} value={this.state.gender} onChange={this.handleChange5}>
                      <Form.Check 
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control type="text"
                    placeholder="Phone No"
                    value={this.state.phoneNo}
                    onChange={this.handleChange6} />
                </Form.Group>



                <Form.Group controlId="formBasicCheckbox">
                <Form.Label>select Languages</Form.Label>
                  <Form.Check type="checkbox" label="Java" value={this.state.languages}
                    onChange={this.handleChange7} />
                  <Form.Check type="checkbox" label="React" />
                  <Form.Check type="checkbox" label="Angular" />
                </Form.Group>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
    
      </center>
      </div>
      </Fragment>
    )
  }
}

export default Controlled;
