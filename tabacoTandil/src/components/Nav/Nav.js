import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProfileCard from '../Client/Profile/ProfileCard';

function OffcanvasExample() {

  const { user, logout } = useAuth()
  const handleLogout = async () => {
    await logout();
  };
  

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/"> Tandil Tabacos</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton={true}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {!user ?
                    <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                    :
                    <Nav.Link as={Link} to="/" onClick={handleLogout}>Salir</Nav.Link>
                  }
                 </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {!user ?
                    null
                    :
                    <div>
                    <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                    <ProfileCard />
                    </div>
                  }
                  <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                  <NavDropdown
                    title="Categoria"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to="/category/cigarrillos">Cigarrillos</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to="/category/tabacos">Tabacos</Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to="/category/papelillos">Papelillos</Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;