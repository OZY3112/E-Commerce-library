import logo from '../assets/Library'

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="fooer__logo">
                            <img src={logo} className="footer__img--img" alt="" />
                        </figure>
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;