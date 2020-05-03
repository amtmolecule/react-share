import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Home from './pages/Home'
import Products from './pages/Products'
import Story from './pages/Story'

const App = () => (
  <Router>
    <Container fluid>
      <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">React Share</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/story">Our Story</Nav.Link>
              <Nav.Link href="/products">Our Products</Nav.Link>
            </Nav>
          </Navbar>
      <Container fluid>
        <Row>
          <Col>
            <Route exact path="/" component={Home}/>
            <Route path="/story" component={Story}/>
            <Route path="/products" component={Products}/>
          </Col>
        </Row>
      </Container>
    </Container>
  </Router>
)
export default App;