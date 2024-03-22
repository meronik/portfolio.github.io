import React ,{useState}  from "react";
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {Route,Routes,Link} from 'react-router-dom'
import About from './component/About';
import Projects from './component/Projects';
import Myskills from './component/Myskills';
import Resume from './component/Resume';
import './css/Home.css'




function App() {
  const [show1,setShow1]=useState(true)

  const hideHome=() => {
  
    if(show1 === true){
      setShow1(false)
    }
    
  }
  const showApp=()=>{
    if(show1 === false){
       setShow1(true)
    }
  }

 

  


  return (
    
   <div className='App area ' >
   
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
   
   
   {
    show1 && (
    <nav className='navbar navbar-expand-lg   justify-content-end '>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/about" className='nav-link' onClick={hideHome} >ABOUT</Link></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/projects" className='nav-link' onClick={hideHome}>PROJECTS</Link></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/myskills" className='nav-link' onClick={hideHome}>MY SKILLS</Link></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><Link to="/resume" className='nav-link' onClick={hideHome}>RESUME</Link></li>
    </ul>
    <u1 className='icon' >
  
    {/* <Link to={{ pathname: "https://www.linkedin.com/in/meronika/" }} target="_blank">  <i class="bi bi-linkedin"></i></Link> */}
    <a className="ic" href="https://www.linkedin.com/in/meronika/" target="_blank" rel="noreferrer"> <i class="bi bi-linkedin"></i></a>
    <a className="ic" href="https://github.com/meronik" target="_blank" rel="noreferrer">  <i class="bi bi-github"></i></a>
   <i class="bi bi-list" id="list"></i>
      

    </u1>
  </nav>
  )
   }
  
     
   
  
   <Routes>
       <Route path="/about"  element={<About/>}  ></Route>
        <Route  path="projects" element={<Projects/>}/>
        <Route  path="myskills" element={<Myskills/>}/>
        <Route  path="resume" element={<Resume/>}/>
 </Routes>
 
 <Link to="/app" className='nav-link' onClick={showApp}  ><i style={{color:'white',fontSize:'30px',position:'absolute',left:"50%"}} class="bi bi-arrow-left-circle" id="arrow" ></i></Link>
   
{
  show1 &&  (
  <Home/>
  )
}
   
   
  </div>
  );

}

export default App;


