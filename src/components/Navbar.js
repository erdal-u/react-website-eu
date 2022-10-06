import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import '../components/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const hadnleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <nav className="navbar">
            <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            TRVL  <i className="fab fa-typo3"></i>
        </Link>
        <div className='menu-icon' onClick={hadnleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu' }>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobilMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Service' className='nav-links' onClick={closeMobilMenu}>Service</Link>
            </li>
            <li className='nav-item'>
                <Link to='/product' className='nav-links' onClick={closeMobilMenu}>Products</Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobilMenu}>Sign Up</Link>
            </li>
        </ul>
        {button && <button buttonStyle='btn--outline'> SIGN UP</button>}
     </div>
    </nav>
    )
}

export default Navbar
