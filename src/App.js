import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ToastComponent from './components/ToastComponent';
import About from './components/About';

function App() {
  const [token, setToken] = useToken();
  const usernameState = useUsername(token);

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
        <ToastComponent/>
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
        <ToastComponent/>
      </div>
    </Router>
  );
}

export default App;
