import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import clock from './assets/clock.jpeg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';
import useToken from './hooks/useToken';
import useUsername from './hooks/useUsername';
import Main from './Main';
import Login from './forms/Login';
import Register from './forms/Register';
import NavComponent from './components/NavComponent';
import PersonDetails from './components/PersonDetails';
import CreatePerson from './forms/CreatePerson';
import EditPerson from './forms/EditPerson';
import Success from './components/Success';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [token, setToken] = useToken();
  const usernameState = useUsername(token);
  const [showToast, setShowToast] = useState(true);

  if (!token){
    return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <NavComponent token={token} setToken={setToken} usernameState={usernameState}/>
        <Routes>
          <Route exact path='/' element={<Login setToken={setToken} usernameState={usernameState}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

        <Footer/>

        <ToastContainer position='top-end' className='m-3'>
          <Toast className='ms-3' show={showToast} onClose={() => setShowToast(false)}>
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

      </div>
    </Router>
    );
  }

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <NavComponent token={token} setToken={setToken} usernameState={usernameState}/>
        <Routes>
          <Route exact path='/' element={<Main token={token}/>}/>
          <Route path='/people/:id' element={<PersonDetails token={token}/>}/>
          <Route path='/createPerson' element={<CreatePerson token={token}/>}/>
          <Route path='/people/:id/editPerson' element={<EditPerson token={token}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

        <Footer/>

        <ToastContainer position='top-end' className='m-3'>
          <Toast className='ms-3' show={showToast} onClose={() => setShowToast(false)}>
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

      </div>
    </Router>
  );
}

export default App;
