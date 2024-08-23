import { Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useNavigate} from "react-router-dom";

const NavComponent = (props) => {
    const [token, setToken] = [props.token, props.setToken];
    const [username, setUsername] = props.usernameState;
    const navigator = useNavigate();

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setUsername('');
        localStorage.removeItem('username');
        navigator('/');
    }

    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">
                    <p style={{
                        "color": "red",
                        "fontFamily": "arial black",
                        "fontSize": "30px",
                        "margin": "0px"
                    }}>What Was Your Name Again?</p>
                </Navbar.Brand>
                { !!token &&
                <NavDropdown align='end' title={ username }>
                    <NavDropdown.Item onClick={ handleLogout }>Log out</NavDropdown.Item>
                </NavDropdown>
                }
            </Container>
        </Navbar>
     );
}
 
export default NavComponent;