import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavComponent = () => {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">What Was Your Name Again?</Navbar.Brand>
                <Nav className="me-0">
                    <Nav.Link href="#">Profile thing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default NavComponent;