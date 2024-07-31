import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useToken from './hooks/useToken';
import Main from './Main';
import Login from './forms/Login';
import NavComponent from './NavComponent';
import PersonDetails from './PersonDetails';
import CreatePerson from './forms/CreatePerson';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import EditPerson from './forms/EditPerson';

function App() {
  const [token, setToken] = useToken();

  if (!token){
    return (
      <div className="App">
        <NavComponent token={token} setToken={setToken}/>
        <Login setToken={setToken}/>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <NavComponent token={token} setToken={setToken}/>
        <Routes>
          <Route exact path='/' element={ <Main /> } />
          <Route path='/people/:id' element={ <PersonDetails /> } />
          <Route path='/createPerson' element={ <CreatePerson /> } />
          <Route path='/people/:id/editPerson' element={ <EditPerson /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
