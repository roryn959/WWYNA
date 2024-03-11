import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import NavComponent from './NavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Routes>
          <Route exact path='/' element={<Main />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
