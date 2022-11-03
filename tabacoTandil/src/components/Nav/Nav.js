import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

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
            <Navbar.Brand><Link to={'/'} style={{textDecoration:'none', color: 'black'}}>Tandil Tabacos</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {!user ?
                    <Link to={'/login'} style={{textDecoration:'none', color: 'black'}}>Ingresar</Link>
                    :
                    <Link to={'/'} style={{textDecoration:'none', color: 'black'}} onClick={handleLogout}>Salir</Link>
                  }
                 </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link><Link style={!user ? {display: 'none'} : {textDecoration:'none', color: 'black'}}>Perfil</Link></Nav.Link>
                  <Nav.Link><Link to='/products' style={{textDecoration:'none', color: 'black'}}>Productos</Link></Nav.Link>
                  <NavDropdown
                    title="Categoria"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <Link to={'category/cigarrillos'} style={{textDecoration:'none', color: 'black'}}>Cigarrillos</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to={'category/tabacos'} style={{textDecoration:'none', color: 'black'}}>Tabacos</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to={'category/papelillos'} style={{textDecoration:'none', color: 'black'}}>Papelillos</Link>
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