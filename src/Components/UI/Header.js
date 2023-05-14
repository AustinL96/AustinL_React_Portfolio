
import Navigation from './Navigation';

import './Header.css';

function Header(props) {
    return (
        <header>
            <h1>Austin Lewis - Full Stack Developer</h1>
            <Navigation setActiveLink={props.setActiveLink} activeLink={props.activeLink} />
        </header>
        
    )
}

export default Header;