import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavComponent from './NavComponent';
import PersonDetails from './PersonDetails';
import CreatePerson from './forms/CreatePerson';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Routes>
          <Route exact path='/' element={ <Main /> } />
          <Route path='/people/:id' element={ <PersonDetails /> } />
          <Route path='/createPerson' element={ <CreatePerson /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
