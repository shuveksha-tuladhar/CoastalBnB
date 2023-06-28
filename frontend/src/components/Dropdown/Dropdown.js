import { useState } from 'react';
// import Navigation from '../Navigation';
import "./dropdown.css";
import { useSelector } from 'react-redux';


function Dropdown( props ) {
    // const [ display, setDisplay ] = useState( 'none' )
    // const sessionUser = useSelector(state => state.session.user);
    function handleClick() {
        // if ( display === 'none' ) {
        //     setDisplay( 'block' )
        // } else {
        //     setDisplay( 'none' )
        // }
    }

    // function handleClick2() {
    //     setDisplay( 'none' )
    // }

    return (
        <div>
            <div className='dropdown-button' onClick={handleClick}>
                    <img id='profile-dropdown' src='./assets/profile-pic.png' />
                    <img id='hamburger' src="./assets/hamburger.png" />
                </div>
            {/* <div className='dropdown-menu' onClick={handleClick2} style={{display:display}}>
                <div id="modal2-background" />
                <Navigation />
            </div> */}

        </div>

    )

}

export { Dropdown }