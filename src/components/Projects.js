import NeighbourNet from '../assets/neighbournet.png';
import CostCompass from '../assets/costCompass.png';
import InternX from '../assets/internx.png';
import StemFellowship from '../assets/stemFellowship1.png';


export default function Projects() {
    return (
        <section id="projects">
            <div id="projects" class="outerContainer">
                <div class="innerContainer">
                    <h1 class="header">My Projects</h1>

                    <div class="flex-wrap">

                        <a class="cardLink" href="/costcompass">
                            <div class="card">
                                <div class="img_wrapper">
                                    <img class="card__img" src={CostCompass}></img>
                                </div>
                                <div class="card__content">
                                    <h1 class="card__header">Cost Compass</h1>
                                    <p class="card__text">Web Development </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </a>
                        <a class="cardLink" href="/neighbournet">
                            <div class="card">
                                <div class="img_wrapper">
                                    <img class="card__img" src={NeighbourNet}></img>
                                </div>
                                <div class="card__content">
                                    <h1 class="card__header">NeighbourNet</h1>
                                    <p class="card__text">Web Development </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </a>
                        <a class="cardLink" href="/internx">
                            <div class="card">
                                <div class="img_wrapper">
                                    <img class="card__img" src={InternX}></img>
                                </div>
                                <div class="card__content">
                                    <h1 class="card__header">InternX</h1>
                                    <p class="card__text">Web Development </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </a>
                        <a class="cardLink" href="/stemfellowship">
                            <div class="card">
                                <div class="img_wrapper">
                                    <img class="card__img" src={StemFellowship}></img>
                                </div>
                                <div class="card__content">
                                    <h1 class="card__header">STEM Fellowship</h1>
                                    <p class="card__text">Web Development </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

        </section >

    )
}