import Navbar from "../Navbar"
import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/i4.png"
import i5 from "../assets/i5.png"
import { Helmet } from "react-helmet";


export default function InternX() {
    return (
        <div>
            <Helmet>
                <title>Ryan Chan</title>
            </Helmet>
            <Navbar />
            <div class="projectContainer">
                <h6>Web Development</h6>
                <h1 class="projectTitle">InternX</h1>
                <h6 class="projectMargin"><a class="projectLink" href="/#home">Home</a> <div class="projectSpacer">{'>'}</div> <a class="projectLink" href="/#projects">Portfolio</a> <div class="projectSpacer">{'>'}</div> <div class="currentProject">InternX</div></h6>
                <div class="skills">
                    <button class="language">Wordpress</button>
                    <button class="language">Javascript</button>
                    <button class="language">PHP</button>
                    <button class="language">HTML</button>
                    <button class="language">CSS</button>
                </div>
                <div class="row">
                    <div class="column3">
                        <p class="pg">InternX was a web-based platform that connected high school students to employers. With portals for both students and employers, InternX fostered a community where professional networks could be established.  </p>
                    </div>
                    <div class="column4">
                        <hr></hr>
                        <h5>Startup</h5>
                        <p class="pg">BETA Camp S20 Cohort</p>
                        <h6 class="marginBottom"><a class="projectLink" href="https://internx.ca/" target="_blank">Open Project <span>&rarr;</span></a></h6>
                    </div>
                </div>
                <br></br>
                <img class="demoPhoto" src={i1}></img>
                <br></br>
                <img class="demoPhoto" src={i2}></img>
                <br></br>
                <img class="demoPhoto" src={i3}></img>
                <br></br>
                <img class="demoPhoto" src={i4}></img>
                <br></br>
                <img class="demoPhoto" src={i5}></img>
                <br></br>
            </div>
        </div>
    )
}