import './header.scss';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className="main-nav">
            <h1 className="title">Guillermo Fernandez</h1>
            <NavLink to={"/about-me"} className="link">About Me</NavLink>
            <NavLink to={"/portfolio"} className="link">Portfolio</NavLink>
            <NavLink to={"/contact-me"} className="link">Contact Me</NavLink>
            <NavLink to={"/resume"} className="link">Resume</NavLink>
        </nav>
    );
}

export default Header;
