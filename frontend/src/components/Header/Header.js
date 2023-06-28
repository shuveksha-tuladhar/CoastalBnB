import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div id='header-bar'>
        <Link id='logo' to='/'>
            {/* <img id='logo-img' alt="Logo here..." src={logo} /> */}
            Logo Here...
            <span id='span-logo'>Coast BnB</span>
        </Link>
        <a href="https://github.com/shuveksha-tuladhar" target="_blank" rel="noreferrer">
            <img className="icons-header" alt="Github" width="32" height="32" src="../../assets/github.png"/>
        </a>
        <br/>
        <a href="https://www.linkedin.com/in/shuvekshatuladhar/" target="_blank" rel="noreferrer">
            <img className="icons-header" alt="LinkedIn" width="32" height="32" src="../../assets/linkedin.png"/>
        </a>
        </div>
        )
    }

export { Header }