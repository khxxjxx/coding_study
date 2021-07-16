import { Navbar, Container, Nav } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const clickHandler = () => {
    props.setNow(moment());
  };

  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand>TO DO</Navbar.Brand>
        <Nav onClick={clickHandler} className="justify-content-end">
          <Nav.Link as={Link} to="/todo/today" className="nav__today">
            Today
          </Nav.Link>
          <Nav.Link as={Link} to="/todo/month" className="nav__month">
            Month
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
