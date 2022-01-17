import { books } from '../data';
import Book from './ui/Book';

export {books} from '../data'

const Discounted = () => {
    return ( 
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="section__title">Discounted <snap className="purple">Books</snap>.</div>
                    <div className="books">
                        {
                        books
                        .filter(book => book.salePrice).slice(0,8)
                        .map((book)=> <Book book={book} key={book.id}/>)
                        }

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Discounted;