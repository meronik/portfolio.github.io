import img from './image.png';
import '../css/Home.css'


let Home = () =>{
    return(
<>
<div className='container-fluid d-flex align-items-center justify-content-center ' id='maindiv'>

<div className='col-lg-6 col-md-6 col-sm-12 d-flex'>
  <div className='col-lg-6 '>
  <svg id="st" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="rgba(224, 4, 248, 0.45)" d="M67.6,-26.7C73.6,-3.6,54.7,22.9,30.2,40.4C5.7,57.9,-24.4,66.5,-43.2,54.1C-62,41.8,-69.4,8.4,-60.3,-19C-51.2,-46.4,-25.6,-67.9,2.6,-68.7C30.8,-69.5,61.6,-49.8,67.6,-26.7Z" transform="translate(100 100)" />
   </svg>
   
     </div>
  <div className='col-lg-6 d-flex align-items-center '>
    <div>
  <h1>HII,</h1>
  <h1 >I'M <span id='name'>MERONIKA.</span> </h1>
  <p>This is my official website to showcase my all works related to web development.</p>
  </div>
  </div>
 
</div>
<div className='col-lg-6 col-md-6 col-sm-12 d-flex '>
 

 <div className='col-lg-8 col-md-2 col-sm-2'>
   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="rgba(224, 4, 248, 0.45)" d="M67.6,-26.7C73.6,-3.6,54.7,22.9,30.2,40.4C5.7,57.9,-24.4,66.5,-43.2,54.1C-62,41.8,-69.4,8.4,-60.3,-19C-51.2,-46.4,-25.6,-67.9,2.6,-68.7C30.8,-69.5,61.6,-49.8,67.6,-26.7Z" transform="translate(100 100)" />
   </svg>
   </div>
  <img src={img} className='img-fluid' id='img-home' alt='img'/>
</div>

</div>



</>
 );
}

export default Home;

