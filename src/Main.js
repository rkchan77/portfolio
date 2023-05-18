import Navbar from "./Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

function Main() {
    return (
        <>
            <Helmet>
                <title>Ryan Chan</title>
            </Helmet>
            <Navbar />
            <Home />
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}

export default Main
