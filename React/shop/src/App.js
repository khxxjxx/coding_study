import React, { lazy, Suspense, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
// import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart.js';
let Detail = lazy(() => import('./Detail.js'));

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([2, 10, 11, 12, 13, 14]);
  let history = useHistory();
  let [더보기, 더보기변경] = useState(true);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Jin's ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail/0">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <div className="jumbotron">
          <h1>20% Season Off</h1>
          <p>Jin's ShoeShop</p>
          <p>
            <button className="btn btn-primary">Buy</button>
          </p>
        </div>
        <div className="container">
          <div className="row">
            {shoes.map((상세페이지, i) => {
              return (
                <Page shoes={상세페이지} i={i} key={i} history={history} />
              );
            })}
          </div>
          {더보기 === true ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then(result => {
                    shoes변경([...shoes, ...result.data]);
                    더보기변경(false);
                  })
                  .catch(() => {
                    console.log('실패했습니다');
                  });
              }}>
              더보기
            </button>
          ) : null}
        </div>
      </Route>

      <Route path="/detail/:id">
        <Suspense fallback={<div>로딩중입니다.</div>}>
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Suspense>
      </Route>

      <Route path="/cart">
        <Cart></Cart>
      </Route>
    </div>
  );
}

function Page(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoes.id + 1
        }.jpg`}
        width="100%"
        onClick={() => {
          props.history.push(`/detail/${props.shoes.id}`);
        }}
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}
export default App;
