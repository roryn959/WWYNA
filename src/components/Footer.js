import { Container } from 'react-bootstrap';
import github from '../assets/github.svg';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';

// bg-body-tertiary fixed-bottom text-center d-none d-md-block mt-5 pt-1
const Footer = () => {
    return ( 
            <footer className='footer mt-auto text-center'>
                <Container fluid className="bg-body-tertiary justify-content-center">
                    <h4 className="pt-3">Created by Rory Nicholas</h4>
                    <Container fluid className="justify-content-center">
                        <a href="mailto:roryn959@icloud.com"><img src={mail} height={25} alt="roryn959@icloud.com" className="m-2"/></a>
                        <a href="https://github.com/roryn959"><img src={github} height={25} alt="Github" className="m-2"/></a>
                        <a href="https://www.linkedin.com/in/rorybnicholas/"><img src={linkedin} height={25} alt="LinkedIn" className="m-2"/></a>
                    </Container>
                    <p className='mx-5'>This project is intended to be merely a proof of concept and is <i>not</i> intended for a production environment,
                        so please avoid entering any sensitive information as its security <i>cannot</i> be guaranteed.
                        Created using the MERN stack with bootstrap.
                    </p>
                </Container>
            </footer>
     );
}
 
export default Footer;