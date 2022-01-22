import { useState } from "react";
import Book from "../components/ui/Book";




const Books = ({books:initialbooks}) => {

    const [books, setBooks] = useState(initialbooks)

    function filterBooks(filter) {
        
        if(filter === 'LOW_TO_HIGH'){
            setBooks(books.slice().sort((a,b)=> (a.salePrice || a.originalPrice)- (b.salePrice || b.originalPrice)))
        }
        if(filter === 'HIGH_TO_LOW'){
            setBooks(books.slice().sort((a,b)=> (a.salePrice || a.originalPrice) + (b.salePrice || b.originalPrice)))
        }
        if(filter === 'RATING'){
            setBooks(books.slice().sort((a,b)=> b.rating - a.rating))
        }
    }
    return ( 
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container ">
                        <div className="row book__rows">
                            <div className="books__header"><h2 className="section__title books__header--title">All Books</h2></div>
                            <select id="fliter" defaultValue="DEFAULT" onChange={(e)=> filterBooks(e.target.value)}>
                                <option value="DEFAULT" selected disabled>Sort</option>
                                <option value="LOW_TO_HIGH">price: Low to High</option>
                                <option value="HIGH_TO_LOW">price: High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map(book => <Book book={book} key={book.id}/>)
                            }
                        </div>
                    </div>
                </section>
         </main>
         </div>
     );
}
 
export default Books;