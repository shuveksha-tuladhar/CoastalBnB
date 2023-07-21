import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div id='header-bar'>
        <Link id='logo' to='/'>
            <img id='logo-img' alt="Logo here..." src='assets/logo-white.jpg' />
            
        </Link>
        
        </div>
        )
    }

export { Header }