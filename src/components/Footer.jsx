import Logo from '../assets/Library.svg'

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="fooer__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/" className='footer__link'>Home</a>
                        <span href="/" className='footer__link no-cursor'>About</span>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;