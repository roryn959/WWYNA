import { Navbar, NavDropdown, Button } from 'react-bootstrap';
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

    const handleAbout = () => {
        navigator('/about');
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
                <Button>
                    <NavDropdown align='end' title={ username } className='bg-body-primary'>
                        <NavDropdown.Item onClick={ handleAbout }>About this project</NavDropdown.Item>
                        <hr className='dropdown-divider'/>
                        <NavDropdown.Item onClick={ handleLogout }>Log out</NavDropdown.Item>
                    </NavDropdown>
                </Button>
                }
            </Container>
        </Navbar>
     );
}
 
export default NavComponent;