import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomePage from './Pages/Home/Home'
import Skills from './Pages/Skills/Skills'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Routes from './Routes/Route'

function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <Routes /> */}
      <HomePage />
      {/* <About /> */}
      <Skills />
      
      <Contact />

    </div>
  );
}

export default App;
