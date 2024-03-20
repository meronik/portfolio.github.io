import '../css/Projects.css'


let Projects=()=>{
    return(
    <div>
     
   <div className="container-fluid  " style={{ background:" linear-gradient(rgba(224, 4, 248, 0.55),white"}}>
   {/* white 10%,rgba(224, 4, 248, 0.55) 15%,white 20%,white 15%,rgba(224, 4, 248, 0.55) 30%,white 50%,rgba(224, 4, 248, 0.55) 55%,white 60%,rgba(224, 4, 248, 0.55) 65% , white 75%,rgba(224, 4, 248, 0.55) 85%,white 95%,rgba(224, 4, 248, 0.55) 100%) */}
  
   

    <div className='pro-cont d-flex align-items-center' >
<div className='col-lg-2'></div>
    <div >
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">BUS TICKET BOOKING</h5>
    <h6 class="card-subtitle">JAVA</h6>
    <p class="card-text">Developed a comprehensive Bus Ticket Booking System using JAVA Collections and OOPS for console level project</p>
<p class="card-text">Designed and created a Arraylist to store information about buses, routes , users and bookings .
</p>
<p> </p>
  </div>
</div>
    </div>

    <div>
    <div class="card " >
  <div class="card-body">
    <h5 class="card-title">CRUD OPERATION</h5>
    <h6 class="card-subtitle ">JAVA</h6>
    <p class="card-text">I developed a CRUD operation using collections in java for students can insert a details and they can select, update, delete a data.</p>
    <p class="card-text">Designed and created a Arraylist to store information about students and update , select and delete.
</p>
  </div>
</div>
    </div>
    <div className='col-lg-2'></div>
    </div>
   </div>
   </div>

    );
}
export default Projects;