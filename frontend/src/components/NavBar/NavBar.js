import { Header } from "../Header/Header";
import { Dropdown } from "../Dropdown/Dropdown";
import './navbar.css'

const NavBar = () => {
    return (
        <div id="header-bar">
            <Header />
            <Dropdown />
        </div>
    )
}

export default NavBar