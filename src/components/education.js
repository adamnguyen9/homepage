export function EducationSection () {
    return (
        <section class="section"style={{background: "none"}} id="education">
            <div class="container" style={{borderColor:"black"}}>
                <h1 class="title" style={{color: "#fdfdfd", textAlign: "center"}}>Education and Skills</h1>
                    <div class="box" style={{background: "none"}}>
                        <div style={{width: "100%"}} >
                            <p style={{color: "#fdfdfd"}}>
                                I attended the University of North Carolina at Chapel Hill from the fall of 2018 to the spring of 2022. Here are some of the many courses and skills that I worked with 
                                in my time as a Tar Heel and in my time as a professional. 
                            </p>
                            <img width="300" height="300" src={`${process.env.PUBLIC_URL}/images/UNC_Chapel_Hill.jpg`} alt="instagram image" />
                        </div>
                    <div>
                        <p style={{color:"white"}}>Academic Summary:</p>
                  <li style={{color:"white"}}>Graduated Spring 2022 with B.S. Computer Science</li><li style={{color:"white"}}>Minored in mathematics</li>
                  <li style={{color:"white"}}>Dean's list: Fall 2018, Spring 2019, Fall 2021, Spring 2022</li>
                 <br/>
                  <p style={{color:"white"}}>Relevant SWE Skills:</p>
                  
                  <li style={{color:"white"}}>Full Stack Application Development which includes the following technologies: React, Typescript, Express.js, C#/.NET APIs, SQL Server</li>
     
                  <li style={{color:"white"}}>Git</li>
                  <li style={{color:"white"}}>Developing and deploying applications in the cloud with AWS</li>
                  <li style={{color:"white"}}>Agile Scrum</li>
                  <li style={{color:"white"}}>Application of Machine Learning Models</li>
                  <li style={{color:"white"}}>Docker/Kubernetes</li>
                  <li style={{color:"white"}}>Operating Systems (COMP530)</li>
                  <li style={{color:"white"}}>Data Structures and Algorithms (COMP410 & COMP550)</li>

                  
                    </div>
                    
                  </div>
                    
                
                       
            </div>
        </section>
    )
}