import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import CPProfile from './Pages/CP_Profile';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Education from "./ChildPage/Education";
import  Work  from "./ChildPage/Work";
import ProjectDisplay from "./ChildPage/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/qualification" element = {<Qualification />} /> 
          <Route path = "/education" element = {<Education />} />
          <Route path = "/work" element = {<Work />} />
          <Route path = "/skills" element = {<Skills />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/cp_profile" element = {<CPProfile />} />
          <Route path = "/contact" element = {<Contact />} />

          <Route path = "/projectDisplay/:id" element = {<ProjectDisplay />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
