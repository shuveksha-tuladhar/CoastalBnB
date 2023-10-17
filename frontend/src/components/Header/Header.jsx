import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className='header-bar'>
        <Link className='logo' to='/'>
            <img className='logo-img' alt="Logo here..." src='/assets/logo-white.jpg' />
            
        </Link>
        
        </div>
        )
    }

export { Header }