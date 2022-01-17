import Book from "./ui/Book";
import {books} from "../data"

const Featured = () => {

    console.log(books)

    function get5starbooks() {
        books.filter(book => book.rating === 5)
    }

    return ( 
       <section id="features">
           <div className="container">
               <div className="row">
                   <h2 className="section__title">Featured <span className="puple">Books</span>.</h2>
                   <div className="books">
                       <Book/>
                   </div>
               </div>
           </div>
       </section>
     );
}
 
export default Featured;