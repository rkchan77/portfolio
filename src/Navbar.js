export default function Navbar() {

    return (
        <>
            <nav className="nav">
                <a href="#home" className="siteTitle">Ryan Chan<div className="white">.</div><div className="purple">_</div></a>
                <ul>
                    <CustomLink href="/#home">// home<sup class="superscript">01</sup></CustomLink>
                    <CustomLink href="/#projects">// projects<sup class="superscript">02</sup></CustomLink>
                    <CustomLink href="/#experience">// experience<sup class="superscript">03</sup></CustomLink>
                    <CustomLink href="/#contact">// contact<sup class="superscript">04</sup></CustomLink>
                </ul>
            </nav>
            <nav className="sidenav">
                <ul>
                    <CustomLink href="#home">// home<sup class="superscript">01</sup></CustomLink>
                    <CustomLink href="#projects">// projects<sup class="superscript">02</sup></CustomLink>
                    <CustomLink href="#experience">// experience<sup class="superscript">03</sup></CustomLink>
                    <CustomLink href="#contact">// contact<sup class="superscript">04</sup></CustomLink>
                </ul>
            </nav>
        </>
    );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )

}