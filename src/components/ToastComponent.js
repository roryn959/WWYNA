import clock from '../assets/clock.jpeg';

import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';

const ToastComponent = () => {
    const [showToast, setShowToast] = useState(localStorage.getItem('toastClosed')===null);

    const closeToast = () => {
      setShowToast(false);
      localStorage.setItem('toastClosed', 'true');
    }

    return ( 
        <ToastContainer position='top-end' className='m-3'>
          <Toast className='ms-3' show={showToast} onClose={closeToast}>
            <Toast.Header className='me-2'>
              <img src={clock} height={25} alt="roryn959@icloud.com" className="m-2"/>
              <strong className="me-auto text-primary">Server Spinup</strong>
            </Toast.Header>
            <Toast.Body>
              <p>
                The backend server of this app sits idle whilst unused to conserve energy. When used, it takes a few seconds
                to 'spin up'.
              </p>
              <p>
                This means when first used, this app may have a small delay when a certain feature is used. Please be
                patient, as this delay will disappear once the app has warmed up!
              </p>
            </Toast.Body>
          </Toast>
        </ToastContainer>
     );
}
 
export default ToastComponent;