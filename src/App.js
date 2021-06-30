import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';
import Memo from './Memo';
import Memo1 from './Memo1';
import UserSearch from './UseMemo';
import Effect from './Effect';
import UseEffect from './UseEffect';
import FunctionUpdate from './FunctionUpdate';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <Fragment>
        <center>
          <Router>
            <div className="App">
              <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">SNEHITHA</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link>
                    <Link to="/controlled">Controlled</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/uncontrolled">Uncontrolled</Link>
                  </Nav.Link>
                  {/* <Nav.Link>
                  <Link to="/Dashboard">Dashboard</Link>
                </Nav.Link> */}
                </Nav>

                <Navbar.Collapse className="justify-content-end">

                  <NavDropdown title="English" variant="dark" id="dropdown-custom-components" style={{ color: 'white', fontSize: '13px' }}>
                    <NavDropdown.Item >Telugu</NavDropdown.Item>
                    <NavDropdown.Item >Hindi</NavDropdown.Item>
                    <NavDropdown.Item >Tamil</NavDropdown.Item>
                    <NavDropdown.Item >English(UK)</NavDropdown.Item>
                  </NavDropdown>
                </Navbar.Collapse>
                <div>
                  <b><i>SNEHITHA</i></b>
                </div>
              </Navbar>
              <br /><br />

              {/* <Effect />
                <FunctionUpdate /> */}
              {/* <UseEffect /> */}
              {/* <UserSearch /> */}
              {/* <Memo />
                 <Memo1 /> */}
              {/* <Controlled />
                <Uncontrolled /> */}

              <Switch>
                <Route exact path="/"><Redirect to="/" /></Route>
                <Route path="/controlled" component={Controlled}></Route>
                <Route path="/uncontrolled" component={Uncontrolled}></Route>
                {/* <Route path="/Dashboard" component={Dashboard}></Route> */}
                <Route path="**">
                  <div>404 not found</div>
                </Route>
              </Switch>
            </div>
          </Router>
        </center>
      </Fragment>
    )
  }
}

export default App;
