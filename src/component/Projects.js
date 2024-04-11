import '../css/Projects.css'


let Projects=()=>{
    return(
    <div>
     
   <div className="container-fluid pro " >
   {/* white 10%,rgba(224, 4, 248, 0.55) 15%,white 20%,white 15%,rgba(224, 4, 248, 0.55) 30%,white 50%,rgba(224, 4, 248, 0.55) 55%,white 60%,rgba(224, 4, 248, 0.55) 65% , white 75%,rgba(224, 4, 248, 0.55) 85%,white 95%,rgba(224, 4, 248, 0.55) 100%) */}
   <h3 className="text-center">PROJECTS</h3>
   <div className=" d">
        <div className="col-lg-1 "> </div>
        <div className="col-lg-4 col-sm-12 skill-card">
            <h3 className="text-center">SPRING BOOT REST API</h3>
       
            <h4><b>Java | Restful API | Spring Boot | MySQL </b></h4>
            <p>I developed a CRUD operation using Spring Boot Framework. That includes CREATE, READ UPDATE and DELETE operation and Error handling</p>
            <p>Technologies used in the project, such as Spring Framework, Spring Boot, Java, RESTful API, MySQL</p>
            <a className="ic" href="https://github.com/meronik/CRUD.git" target="_blank" rel="noreferrer">  <i class="bi bi-github"></i></a>
        </div>
        <div className="col-lg-2 "> </div>
        <div className="col-lg-4 col-sm-12  skill-card">
            <h3 className="text-center " >BUS TICKET BOOKING</h3>
            <h4><b>JAVA</b></h4>
            <p>Developed a comprehensive Bus Ticket Booking System using JAVA Collections and OOPS for console level project</p>
            <p>Designed and created a Arraylist to store information about buses, routes , users and bookings .</p>
            <a className="ic" href="https://github.com/meronik/Bus-Ticket-Booking.git" target="_blank" rel="noreferrer">  <i class="bi bi-github"></i></a>
            
        </div>
        <div className="col-lg-1 "> </div>

        
        </div>
   

    
   </div>
   </div>

    );
}
export default Projects;