import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg'

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link h="/">
                        <figure className="fooer__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link h="/" className='footer__link'>Home</Link>
                        <span href="/" className='footer__link no-cursor'>About</span>
                        <Link h="/books" className='footer__link'>Books</Link>
                        <Link h="/cart" className='footer__link'>cart</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2022 Library</div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;