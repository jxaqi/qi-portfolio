import flower from './img/flower_000.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="nav-link" href="#"><img src={flower} alt="flower" width="32" height="32"></img></a>
          <a className="nav-link icon linkedin" href="#"><FaLinkedin size={32} /></a>
          <a className="nav-link icon" href="#"><FaGithub size={32} /></a>

          {/* <div className="row">
            <div className="col-4">
              <a className="nav-link" href="#"><img src={flower} alt="flower" width="32" height="32"></img></a>
            </div>
            <div className="col-4">
              <a className="nav-link icon linkedin" href="#"><FaLinkedin size={32} /></a>
            </div>
            <div className="col-4">
              <a className="nav-link icon" href="#"><FaGithub size={32} /></a>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default App;
