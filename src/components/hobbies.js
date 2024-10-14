export function HobbySection () {

        return (
            <section class="section"style={{background: "none"}} id="hobbies">
                <div class="container" style={{borderColor:"black"}}>
                    <h1 class="title" style={{color: "#fdfdfd", textAlign: "center"}}>Hobbies and Interests</h1>
                        <div class="box has-text-centered"  style={{background: "none"}}>
                        <video width="320" height="240" controls>
                             <source src={`${process.env.PUBLIC_URL}/images/running.mp4`} type="video/mp4"></source>
                        </video>
                        <div style={{paddingBottom: "20px", color: "white"}}>Since I was a little kid, I've had 3 hobbies: <em>swimming, running, and hiking</em>. Although I am still an avid runner (I'm running the 2024 Richmond Marathon), as of late,
                             my passions have expanded to include cooking, reading, soccer, basketball, and playing piano.  </div>

               
                        <div style={{paddingBottom: "20px", color: "white"}}>I am a firm believer that life is too short for someone to be pencils-down in their work 24/7. Thus, I've even began to travel recently. </div>
                        <img src={`${process.env.PUBLIC_URL}/images/sunset.jpg`} width="320" height="240"></img>
                       <div> <img src={`${process.env.PUBLIC_URL}/images/traveling.jpg`} width="320" height="240"></img></div>
                <div style={{paddingBottom: "20px", color: "white"}}>If there's anything that you are passionate about that I haven't listed, teach me. I'm always down to try something new.
                    Even if it is something I've listed, there's always something to learn. <em>
                        It's not about where you start, it's where you end up. </em>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/headshot_2.jpg`} width="320" height="240"></img>

                      </div>          
                </div>
            </section>
        )
    }
