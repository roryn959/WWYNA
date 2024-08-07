import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useToken from './hooks/useToken';
import Main from './Main';
import Login from './forms/Login';
import Register from './forms/Register';
import NavComponent from './NavComponent';
import PersonDetails from './PersonDetails';
import CreatePerson from './forms/CreatePerson';
import EditPerson from './forms/EditPerson';
import Success from './Success';

function App() {
  const [token, setToken] = useToken();

  if (!token){
    return (
    <Router>
      <div className="App">
        <NavComponent token={token} setToken={setToken}/>
        <Routes>
          <Route exact path='/' element={<Login setToken={setToken}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </div>
    </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <NavComponent token={token} setToken={setToken}/>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/people/:id' element={<PersonDetails/>}/>
          <Route path='/createPerson' element={<CreatePerson/>}/>
          <Route path='/people/:id/editPerson' element={<EditPerson/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
