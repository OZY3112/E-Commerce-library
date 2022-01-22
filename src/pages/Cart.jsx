
const Cart = ({cart, changequantity}) => {


const total = () => {
    let price = 0 
    cart.forEach((item)=> {
        price += +(item.book.salePrice || item.book.originalPrice).toFixed(2);
    });
    return price;
    }


    
    return ( 
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                        <div className="cart__title">Cart</div>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return(
                                             <div className="cart__item">
                                    <div className="cart__book">
                                        <img src={book.url} className="cart__book--img" alt="" />
                                        <div className="cart__book--info">
                                            <span className="cart__book--title">
                                                {book.title}
                                            </span>
                                            <span className="cart__book--price">
                                               ${(book.salePrice || book.originalPrice).toFixed(2)}
                                            </span>
                                             <button className="cart__book--remove">Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input type="number"min={0} defaultValue={1} max={30} className="cart__input" value={book.quantity}
                                        onChange={(e) => changequantity(book, e.target.value)} />
                                    </div>
                                    <div className="cart__total">
                                       ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                    </div>
                                </div>
                                        )
                                    })
                                }

                               
                            </div>
                        </div>
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>SubTotal</span>
                                <span>$9.00</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>$0.38</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>{total()}</span>
                            </div>
                            <button className="btn btn__checkout no-cusor" onClick={() => alert(`sorry, wasn,t skilled enought for that :(`)}>Procced to checkout</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default Cart;