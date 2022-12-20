import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';

import Slides from './components/Slides';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
          <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/slides`}>Slides</Link>
            </li>
            <li>
              <Link to={`/projects`}>Projects</Link>
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route path="*" element={<Home />} />
            <Route
              path="slides"
              element={<Slides />}
              exact
            />
            <Route path="projects" element={<Projects />} />
          </Routes>
    </div>
  );
}

export default App;
