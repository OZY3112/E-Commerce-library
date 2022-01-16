import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LibraryLogo from '../assets/Library.svg'

const Nav = () => {
    return ( 
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src="" alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Books 
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon="bars" className="fas fa-bars"/>
                    </button>
                </ul>
            </div>
        </nav>
     );
}
 
export default Nav;