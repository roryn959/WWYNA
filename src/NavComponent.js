import { Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const NavComponent = (props) => {
    const [token, setToken] = [props.token, props.setToken];

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">What Was Your Name Again?</Navbar.Brand>
                { !!token &&
                <NavDropdown align='end' title={ token }>
                    <NavDropdown.Item onClick={ handleLogout }>Log out</NavDropdown.Item>
                </NavDropdown>
                }
            </Container>
        </Navbar>
     );
}
 
export default NavComponent;