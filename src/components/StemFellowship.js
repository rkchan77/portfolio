import Navbar from "../Navbar"
import sf1 from "../assets/sf1.png"
import sf2 from "../assets/sf2.png"
import sf3 from "../assets/sf3.png"
import { Helmet } from "react-helmet";

export default function StemFellowship() {
    return (
        <div>
            <Helmet>
                <title>Ryan Chan</title>
            </Helmet>
            <Navbar />
            <div class="projectContainer">
                <h6>Web Development</h6>
                <h1 class="projectTitle">STEM Fellowship</h1>
                <h6 class="projectMargin"><a class="projectLink" href="/#home">Home</a> <div class="projectSpacer">{'>'}</div> <a class="projectLink" href="/#projects">Portfolio</a> <div class="projectSpacer">{'>'}</div> <div class="currentProject">STEM Fellowship</div></h6>
                <div class="skills">
                    <button class="language">Wordpress</button>
                    <button class="language">Javascript</button>
                    <button class="language">PHP</button>
                    <button class="language">HTML</button>
                    <button class="language">CSS</button>
                </div>
                <div class="row">
                    <div class="column3">
                        <p class="pg">STEM Fellowship is a Canadian registered charity that connects and empowers young innovators under the principle of "crowdsourcing science". The STEM Fellowship is built on Wordpress and is comprised of 100s of pages for the various teams and events. </p>
                    </div>
                    <div class="column4">
                        <hr></hr>
                        <h5>Organization</h5>
                        <p class="pg">STEM Fellowship</p>
                        <h6 class="marginBottom"><a class="projectLink" href="https://stemfellowship.org/" target="_blank">Open Project <span>&rarr;</span></a></h6>
                    </div>
                </div>
                <br></br>
                <img class="demoPhoto" src={sf1}></img>
                <br></br>
                <img class="demoPhoto" src={sf2}></img>
                <br></br>
                <img class="demoPhoto" src={sf3}></img>
            </div>
        </div>
    )
}