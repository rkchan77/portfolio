import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function Contact() {
    return (
        <footer id="contact">
            <div class="outerContainer">
                <div class="innerContainer">
                    <h1 class="midHeader">Get in Touch</h1>
                    <h3>Want to chat? Send me an email or contact me through this form!</h3>
                    <div class="form">
                        <iframe class="formEntry" src="https://www.cognitoforms.com/f/H3DU2YRs3EiGKMTDxiF_Mg/1"></iframe>
                        <script src="https://www.cognitoforms.com/f/iframe.js"></script>
                    </div>
                    <div class="contacts">
                        <ul class="contactIcon">
                            <li><a class="email" href="mailto:hello@rkchan.com" target="_blank"><h4>hello@rkchan.com</h4></a>
                            </li>
                            <li><a class="whiteSpacer" href="https://www.linkedin.com/in/rykchan/" target="_blank"><h4><BsLinkedin /></h4></a>
                            </li>
                            <li><a class="whiteSpacer" href="https://github.com/rkchan77" target="_blank"><h4><AiFillGithub /></h4></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}