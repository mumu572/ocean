import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Ocean from './containers/Ocean/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Ocean />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
