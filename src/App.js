import flower from './img/flower_000.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import About from './About';
import Project from './Project';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="nav-link" href="#"><img src={flower} alt="flower" width="32" height="32"></img></a>
          <a className="nav-link icon linkedin" href="https://www.linkedin.com/in/jiaqifoo/" target="_blank"><FaLinkedin size={32} /></a>
          <a className="nav-link icon" href="https://github.com/jxaqi" target="_blank"><FaGithub size={32} /></a>
        </div>
      </nav>
      <About />
      <Project />
    </div>
  );
}

export default App;
