import { Container } from 'react-bootstrap';
import github from '../assets/github.svg';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';

// bg-body-tertiary fixed-bottom text-center d-none d-md-block mt-5 pt-1
const Footer = () => {
    return ( 
            <footer className='footer mt-auto text-center '>
                <Container fluid className="bg-body-tertiary justify-content-center">
                    <h4 className="mt-3">Created by Rory Nicholas</h4>
                    <Container fluid className="justify-content-center">
                        <a href="mailto:roryn959@icloud.com"><img src={mail} height={25} alt="roryn959@icloud.com" className="m-2"/></a>
                        <a href="https://github.com/roryn959"><img src={github} height={25} alt="Github" className="m-2"/></a>
                        <a href="https://www.linkedin.com/in/rorybnicholas/"><img src={linkedin} height={25} alt="LinkedIn" className="m-2"/></a>
                    </Container>
                    <p className="mb-3">Created using react and bootstrap.</p>
                </Container>
            </footer>
     );
}
 
export default Footer;