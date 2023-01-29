import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <NavBar/>
     <Home/>
     <About/>
     <Skills/>
     <Contact/>
     <SocialLinks/>
    </div>
  );
}

export default App;
