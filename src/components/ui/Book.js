import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = () => {
    return ( 
        <div className="book">
                           <a href="/">
                               <figure className="book__img--wrapper">
                                   <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0626/9780062674685.jpg" alt="" className="book__img" />
                               </figure>
                           </a>
                           <div className="book__title">
                               <a href="/" className="book__title--link">
                                   12 and a half
                               </a>
                           </div>
                           <div className="book__ratings">
                               <FontAwesomeIcon icon="star"/>
                               <FontAwesomeIcon icon="star"/>
                               <FontAwesomeIcon icon="star"/>
                               <FontAwesomeIcon icon="star"/>
                               <FontAwesomeIcon icon="star-half-alt"/>
                           </div>
                           <div className="book__price">
                               <span className="book__price--normal">$15.00</span>
                               $10.00
                           </div>
                       </div>
     );
}
 
export default Book;