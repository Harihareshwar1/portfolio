import {Routes,Route, BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer';
import Home from './Home'
import Skills from './Skills';
import Achievements from './Achievements';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact  from './Contact';
function App() {
    return (
      <div className="min-h-screen  bg-gradient-to-br from-gray-900 to-black p-8;">
       <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills/>} ></Route>
          <Route path="/achievements" element={<Achievements />} ></Route>
          <Route path="/certifications" element={<
            Certifications />} ></Route>
            <Route path="/projects" element={<Projects/>} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
        </BrowserRouter>
        <Footer></Footer>
        </div>
    );
}

export default App;
