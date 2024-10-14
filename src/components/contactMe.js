export function ContactMeSection () {
    return (
    <section class="section" style={{background: "none"}} id="contact">
        <div class="container">
            <h1 class="title" style={{color: "#fdfdfd", textAlign: "center"}}>Contact Me</h1>
                <div class="columns box" style={{background: "none", justifyContent: "center"}}>
                    <a href="https://www.facebook.com/anguyen2000/" target="_blank">
                        <img width="200" height="200" style={{paddingRight: "20px"}} src={`${process.env.PUBLIC_URL}/images/facebook_icon.png`} alt="facebook image" />
                    </a>     
                    <a href="https://www.linkedin.com/in/adam-nguyen-a0aa99217/" target="_blank">
                        <img width="200" height="200" src={`${process.env.PUBLIC_URL}/images/linkedin_icon.webp`} alt="linkedin image" />
                    </a>
                    <a href="https://www.instagram.com/adam.nguyen5/" target="_blank">
                        <img width="200" height="200" src={`${process.env.PUBLIC_URL}/images/instagram_icon.webp`} alt="instagram image" />
                    </a>
                </div>
            </div>
    </section>)
}