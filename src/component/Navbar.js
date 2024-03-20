
import { Link } from 'react-router-dom';


function Navbar(){
return(
    <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-end  '>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/about" className='nav-link' >ABOUT</Link></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/projects" className='nav-link' >PROJECTS</Link></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/myskills" className='nav-link'>MY SKILLS</Link></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/resume" className='nav-link' >RESUME</Link></li>
    </ul>
    <u1 className='icon' >
    <i class="bi bi-linkedin"></i>
       <i class="bi bi-github"></i>

    </u1>
  </nav>
 

 </div>
);
}
export default Navbar;