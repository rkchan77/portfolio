import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdOpen } from 'react-icons/io';
import CityOfToronto from '../assets/cityoftoronto.png';
import CodeNinjas from '../assets/codeninjas.png';
import StemFellowship from '../assets/stemfellowship.png';

export default function Experience() {
    return (
        <section id="experience">
            <div class="outerContainer">
                <div class="innerContainer">
                    <h1 class="header">Professional Experience</h1>

                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" id="rd1" name="rd"></input>
                            <label class="tab-label" for="rd1">Project Leader / React Developer @ City of Toronto<div class="date">2023 - Present</div></label>
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
                                            <p>Developed a web-based cost estimation tool for the City of Toronto's transportation sector using a ReactJS framework and Firebase Database </p>
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
                            <label class="tab-label" for="rd2">Junior Front End Developer @ Code Ninjas<div class="date">2022</div></label>
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
                                            <p>Designed and developed the UI and UX for an admin portal by creating reusable Front-end components in VueJS</p>
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
                            <input type="radio" id="rd3" name="rd"></input>
                            <label class="tab-label" for="rd3">Web Development Lead @ STEM Fellowship<div class="date">2020 - 2022</div></label>
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