import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomePage from './Pages/Home/Home'
import Skills from './Pages/Skills/Skills'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import Routes from './Routes/Route'
import Headroom from 'react-headroom';
function App() {
  return (
    <div className="App">
      <Headroom><Navbar /></Headroom>
      <HomePage />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
