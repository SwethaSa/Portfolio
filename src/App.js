import './App.css';
import './Components/Home'
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';


function App() {
  return (
<>

    <Home/>
    <Skills/>
    <Work/>
    <Contact/>
    </>
  );
}

export default App;

