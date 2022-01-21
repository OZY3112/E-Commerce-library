import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookInfo = ({books, addToCart, cart}) => {

    const {id} = useParams()
    const book = books.find(book => +book.id === +id)

    function addbooktocart(book){
        addToCart(book)
    }
    function bookexists(){
        return cart.find(book => book.id === +id)
    }
    
    return ( 
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                           <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left"/>   
                            </Link> 
                            <Link to="/books">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating="4.5"/>
                                <div className="book__selected--price">
                                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dicta corporis repellat voluptatum asperiores incidunt quae eum unde possimus? Odio qui nobis ipsam consequatur facere libero vero, est ipsa optio.
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dicta corporis repellat voluptatum asperiores incidunt quae eum unde possimus? Odio qui nobis ipsam consequatur facere libero vero, est ipsa optio.
                                    </p>
                                </div>
                                {
                                    bookexists() ? <Link to={`/cart`} className="book__link"> <button className="btn">Checkout</button></Link> 
                                     :
                                      <button className="btn" onClick={() => addbooktocart(book)}>Add to cart</button>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Rcommended Books
                        </h2>
                        </div>
                    </div>
                    <div className="books">
                        {
                            books
                            .filter((book)=> book.rating === 5 && +book.id !== +id )
                            .slice(2,6)
                            .map((book)=> <Book book={book} key={book.id}/>)
                        }
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default BookInfo;