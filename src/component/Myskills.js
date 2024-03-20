

let Myskills=()=>{
    return(
    <div className='container-fluid  text-center myskill'>
        <div className="col-lg-12">
        <h3>MY SKILLS</h3>
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-lg-4 flip-card">
            <div className="card flip-card-inner">
                <div className="card-body flip-card-front">
                    <p style={{fontSize:"1.5rem"}}>SKILLS</p>
                </div>
                <div className="card-body flip-card-back skilsicon">
                    <p>Front End</p>
                    <div className="sk-icons">
                    <i class="bi bi-filetype-html"></i>
                    <i class="bi bi-filetype-css"></i>
                    <i class="bi bi-bootstrap"></i>
                    <i class="bi bi-filetype-js"></i>
                    {/* <ul className="li">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BOOSTRAP</li>
                        <li>JavaScript</li>
                    </ul> */}
                    </div>
                    <p>Back End</p>
                    <div className="sk-icons">
                    <i class="bi bi-filetype-java"></i>
                    <i class="bi bi-filetype-sql"></i>

                    </div>
                </div>
            </div>
            </div>

           <div className="col-lg-4 flip-card ">
           <div className="card flip-card-inner">
                <div className="card-body flip-card-front pt-5">
                    <p style={{fontSize:"1.5rem"}}>COURSE</p>
                </div>
                <div className="card-body flip-card-back pt-5">
                    <p>I have completed <span style={{color:"blue"}}>JAVA FULL STACK</span> course in besant technologies.Implementing various technologies including Java, 
Spring Boot, HTML, CSS, JavaScript and MySQL to develop web applications</p>
                </div>
            </div>
           </div>

           <div className="col-lg-4 flip-card">
           <div className="card flip-card-inner">
                <div className="card-body flip-card-front pt-5">
                    <p style={{fontSize:"1.5rem"}}>INTERNSHIP</p>
                </div>
                <div className="card-body flip-card-back pt-5">
                    <p>I have hands on experience in web developement.I have completed my 6-month internship in DExTRASYS TECHNOLOGIES PRIVATE LIMITED.</p>
                </div>
            </div>
           </div>
        </div>
        </div>
    </div>
    );
}
export default Myskills;