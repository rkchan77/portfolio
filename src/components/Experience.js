import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdOpen } from 'react-icons/io';
import CityOfToronto from '../assets/cityoftoronto.png';
import CodeNinjas from '../assets/codeninjas.png';
import StemFellowship from '../assets/stemfellowship.png';
import JasmineAi from '../assets/jasmineAI.jpeg';
import tholos from '../assets/tholos.png'

export default function Experience() {
    return (
        <section id="experience">
            <div class="outerContainer">
                <div class="innerContainer">
                    <h1 class="header">Professional Experience</h1>

                
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" id="rd5" name="rd"></input>
                            <label class="tab-label" for="rd5">Software Engineering Intern @ Tholos<div class="date">Jun 2023 - Oct 2023</div></label>
                            <div class="tab-content">
                                <div class="row">
                                    <div class="column1">
                                        <img class="logos" src={tholos}></img>
                                    </div>
                                    <div class="column2">

                                        <div class="details">
                                            <div class="icon"><IoLocationSharp /></div>
                                            <h6>Remote</h6>
                                            <a class="link" href="https://www.tholos.app/" target="_blank"><div class="icon"><IoMdOpen /></div><h6>tholos.app</h6></a>
                                        </div>
                                        <div class="description">
                                            <p>Tholos is a fintech startup developing a web3 self-custodial crypto wallet for secure digital asset management. Worked as a software engineering intern to develop various app features </p>
                                        </div>
                                        <div class="skills">
                                            <button class="language">Typescript</button>
                                            <button class="language">ReactJS</button>
                                            <button class="language">PostgreSQL</button>
                                            <button class="language">PrismaORM</button>
                                            <button class="language">APIs</button>
                                            <button class="language">TailwindCSS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="tab">
                            <input type="radio" id="rd4" name="rd"></input>
                            <label class="tab-label" for="rd4">Contract Frontend Developer @ Jasmine AI<div class="date">Jun 2023 - Aug 2023</div></label>
                            <div class="tab-content">
                                <div class="row">
                                    <div class="column1">
                                        <img class="logos" src={JasmineAi}></img>
                                    </div>
                                    <div class="column2">

                                        <div class="details">
                                            <div class="icon"><IoLocationSharp /></div>
                                            <h6>Remote</h6>
                                            <a class="link" href="https://www.askjasmine.ai/" target="_blank"><div class="icon"><IoMdOpen /></div><h6>askjasmine.ai</h6></a>
                                        </div>
                                        <div class="description">
                                            <p>Jasmine AI is an artificial intelligence startup aiming to digitize the housing market and democratize real estate data. Worked as a founding engineer and developed frontend components for MVP</p>
                                        </div>
                                        <div class="skills">
                                            <button class="language">Javascript</button>
                                            <button class="language">ReactJS</button>
                                            <button class="language">NodeJS</button>
                                            <button class="language">HTML</button>
                                            <button class="language">TailwindCSS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="tab">
                            <input type="radio" id="rd3" name="rd"></input>
                            <label class="tab-label" for="rd3">Project Leader @ City of Toronto<div class="date">Jan 2023 - Apr 2023</div></label>
                            <div class="tab-content">
                                <div class="row">
                                    <div class="column1">
                                        <img class="logos" src={CityOfToronto}></img>
                                    </div>
                                    <div class="column2">

                                        <div class="details">
                                            <div class="icon"><IoLocationSharp /></div>
                                            <h6>Toronto, Ontario</h6>
                                            <a class="link" href="https://www.toronto.ca/" target="_blank"><div class="icon"><IoMdOpen /></div><h6>toronto.ca</h6></a>
                                        </div>
                                        <div class="description">
                                            <p>Developed a web-based cost estimation tool to assist the City of Toronto's transportation sector with budgeting roadway projects </p>
                                        </div>
                                        <div class="skills">
                                            <button class="language">Javascript</button>
                                            <button class="language">ReactJS</button>
                                            <button class="language">NodeJS</button>
                                            <button class="language">Firebase</button>
                                            <button class="language">HTML</button>
                                            <button class="language">CSS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="tab">
                            <input type="radio" id="rd2" name="rd"></input>
                            <label class="tab-label" for="rd2">Junior Frontend Developer @ Code Ninjas<div class="date">Jun 2022 - Aug 2022</div></label>
                            <div class="tab-content">
                                <div class="row">
                                    <div class="column1">
                                        <img class="logos" src={CodeNinjas}></img>
                                    </div>
                                    <div class="column2">

                                        <div class="details">
                                            <div class="icon"><IoLocationSharp /></div>
                                            <h6>Richmond Hill, Ontario</h6>
                                            <a class="link" href="https://www.codeninjas.com/richmond-hill-on-ca" target="_blank"><div class="icon"><IoMdOpen /></div><h6>codeninjas.com</h6></a>
                                        </div>
                                        <div class="description">
                                            <p>Designed user interface and developed front end components for an admin portal for student management</p>
                                        </div>
                                        <div class="skills">
                                            <button class="language">Javascript</button>
                                            <button class="language">VueJS</button>
                                            <button class="language">NodeJS</button>
                                            <button class="language">HTML</button>
                                            <button class="language">CSS</button>
                                            <button class="language">Figma</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="tab">
                            <input type="radio" id="rd1" name="rd"></input>
                            <label class="tab-label" for="rd1">Web Development Lead @ STEM Fellowship<div class="date">Sep 2020 - May 2022</div></label>
                            <div class="tab-content">
                                <div class="row">
                                    <div class="column1">
                                        <img class="logos" src={StemFellowship}></img>
                                    </div>
                                    <div class="column2">

                                        <div class="details">
                                            <div class="icon"><IoLocationSharp /></div>
                                            <h6>Remote</h6>
                                            <a class="link" href="https://stemfellowship.org/" target="_blank"><div class="icon"><IoMdOpen /></div><h6>stemfellowship.org</h6></a>
                                        </div>
                                        <div class="description">
                                            <p>Lead web developer at STEM Fellowship responsible for managing all website operations. Designed and developed pages using Wordpress, HTML, and CSS</p>
                                        </div>
                                        <div class="skills">
                                            <button class="language">Wordpress</button>
                                            <button class="language">HTML</button>
                                            <button class="language">CSS</button>
                                            <button class="language">Figma</button>
                                            <button class="language">SEO</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}