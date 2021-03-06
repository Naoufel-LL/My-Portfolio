import './Allproject.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo"><Link style={{textDecoration :"none"}} to="/"><h3>NaoufelBahassoune();</h3></Link></div>
            <ul>
            <li><Link to="/#competence">Competences</Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/#contact">Contact Me</Link></li>
            <li><a to="/">Fiver</a></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;