import { Header } from "../Header/Header";
import { Dropdown, DropdownList } from "../Dropdown/DropdownList";
import './Navbar.css'

const NavBar = () => {
    return (
        <div id="nav-bar">
            <Header />
            <DropdownList />
        </div>
    )
}

export default NavBar