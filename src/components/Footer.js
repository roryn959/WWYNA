import { Container } from 'react-bootstrap';
import github from '../assets/github.svg';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';


const Footer = () => {
    return ( 
        <div className="footer">
            <footer>
                <Container fluid className="bg-body-tertiary fixed-bottom text-center d-none d-md-block mt-4 p-0">
                    <h4 className="mt-3">Created by Rory Nicholas</h4>
                    <Container fluid>
                        <a href="mailto:roryn959@icloud.com"><img src={mail} height={25} alt="roryn959@icloud.com" className="m-2"/></a>
                        <a href="https://github.com/roryn959"><img src={github} height={25} alt="Github" className="m-2"/></a>
                        <a href="https://www.linkedin.com/in/rorybnicholas/"><img src={linkedin} height={25} alt="LinkedIn" className="m-2"/></a>
                    </Container>
                    <p className="mb-3">Created using react and bootstrap.</p>
                </Container>
            </footer>
        </div>
     );
}
 
export default Footer;