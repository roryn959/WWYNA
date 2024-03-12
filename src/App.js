import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavComponent from './NavComponent';
import PersonDetails from './PersonDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Routes>
          <Route exact path='/' element={ <Main /> }/>
          <Route path='/people/:id' element={ <PersonDetails /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
