import UndrawBooks from '../assets/undrawn_Books.svg'

const Landing = () => {
    return ( 
        <section id="landing">
            <header>
                    <div className="header__container">
                        <div className="header__description">
                            <h1>Egypt's most awarded online library</h1>
                            <h2>Find you dream book with <span className="purple">library</span> right now!</h2>
                            <a href="#features"><button className="btn">Browse Books</button></a>
                        </div>
                        <figure className="header__img--wrapper">
                            <img src={UndrawBooks} alt="" />
                        </figure>
                    </div>
            </header>
        </section>
     );
}
 
export default Landing;