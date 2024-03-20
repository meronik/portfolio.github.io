import React  from "react";
import '../css/About.css'
import img from './image.png'





let About=()=>{

    
  
  
  
    return(
  <div>
    <div className="container-fluid bg" style={{   background:" linear-gradient(rgba(224, 4, 248, 0.55),white)"}}>
   

   
       <div className="container d-flex  align-items-center about-main">
    <div className="col-lg-6 col-md-3 col-sm-4 main-1 ">
      
      <div id="content">
      <p>Recent computer science graduate with a strong foundation in Java
programming, web development, and a passion for learning and
contributing to innovative projects. Seeking an entry-level position as a 
web developer to apply my skills and knowledge to real-world
applications and further develop my expertise in development.</p>
<p>And also, I have an experience in web development. I have completed my internship as a web developer.</p>
</div>
    </div>
    <div className="col-lg-6 col-sm-8 main-2">
      <img src={img} alt="" className="img-fluid" id="image"/>
    </div>
  </div>
   
    </div>
  </div>
    
   
   
   
  
   
    );
}
export default About;