import './App.css';
import HeaderPage from './components/HeaderPage';
import Particles from 'react-particles-js';
import Competences from './components/Competences';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route,BrowserRouter} from 'react-router-dom'
import Allprojects from './components/Allprojects'

function App() {
  return (
    <BrowserRouter>
     <Particles className="particles"
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                />
     <div> 
    <Route exact path="/">
    <HeaderPage />
    <Competences />
    <Project />
    <Allprojects />
    <Contact />
    <Footer />
    </Route>
  </div>
                </BrowserRouter>
                
    
  );
}

export default App;