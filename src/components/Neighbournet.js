import Navbar from "../Navbar"
import nn1 from "../assets/nn1.png"
import nn2 from "../assets/nn2.png"
import nn3 from "../assets/nn3.png"
import { Helmet } from "react-helmet";

export default function NeighbourNet() {
    return (
        <div>
            <Helmet>
                <title>Ryan Chan</title>
            </Helmet>
            <Navbar />
            <div class="projectContainer">
                <h6>Web Development</h6>
                <h1 class="projectTitle">NeighbourNet</h1>
                <h6 class="projectMargin"><a class="projectLink" href="/#home">Home</a> <div class="projectSpacer">{'>'}</div> <a class="projectLink" href="/#projects">Portfolio</a> <div class="projectSpacer">{'>'}</div> <div class="currentProject">NeighbourNet</div></h6>
                <div class="skills">
                    <button class="language">Shopify Development</button>
                    <button class="language">Liquid</button>
                    <button class="language">Javascript</button>
                    <button class="language">HTML</button>
                    <button class="language">CSS</button>
                </div>
                <div class="row">
                    <div class="column3">
                        <p class="pg">NeighbourNet was a multi-vendor ecommerce platform that provided local businesses with an end-to-end digital sales method during the pandemic. Through NeighbourNet, businesses were able to market, sell, and ship their products, as well as receive customer feedback and donations through their online storefronts. </p>
                    </div>
                    <div class="column4">
                        <hr></hr>
                        <h5>Startup</h5>
                        <p class="pg">Partners (20+): BSIDE Beauty, Kid Icarus, Willem and Jools, Devil's Workshop, Pluto Collectives, etc.</p>
                    </div>
                </div>
                <br></br>
                <img class="demoPhoto" src={nn1}></img>
                <br></br>
                <img class="demoPhoto" src={nn2}></img>
                <br></br>
                <img class="demoPhoto" src={nn3}></img>
                <br></br>
                <iframe class="demoVideo" src="https://www.youtube.com/embed/7oDbpqXEC3g"></iframe>
            </div>
        </div>
    )
}