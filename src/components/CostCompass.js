import Navbar from "../Navbar"
import cc1 from "../assets/cc1.png"
import cc2 from "../assets/cc2.png"
import { Helmet } from "react-helmet";

export default function CostCompass() {
    return (
        <div>
            <Helmet>
                <title>Ryan Chan</title>

            </Helmet>
            <Navbar />
            <div class="projectContainer">
                <h6>Web Development</h6>
                <h1 class="projectTitle">Cost Compass</h1>
                <h6 class="projectMargin"><a class="projectLink" href="/#home">Home</a> <div class="projectSpacer">{'>'}</div> <a class="projectLink" href="/#projects">Portfolio</a> <div class="projectSpacer">{'>'}</div> <div class="currentProject">Cost Compass</div></h6>
                <div class="skills">
                    <button class="language">Javascript</button>
                    <button class="language">ReactJS</button>
                    <button class="language">NodeJS</button>
                    <button class="language">Firebase</button>
                    <button class="language">HTML</button>
                    <button class="language">CSS</button>
                </div>
                <div class="row">
                    <div class="column3">
                        <p class="pg">Cost Compass is a web-based tool built for the City of Toronto's Transportation Sector. It is used to help predict the costs of various future roadway and infrastructure projects by yielding accurate cost estimates based on historical data of previous projects. </p>
                    </div>
                    <div class="column4">
                        <hr></hr>
                        <h5>Client</h5>
                        <p class="pg">City of Toronto (Transportation Sector)</p>
                    </div>
                </div>
                <br></br>
                <img class="demoPhoto" src={cc2}></img>
                <br></br>
                <img class="demoPhoto" src={cc1}></img>
            </div>
        </div>
    )
}