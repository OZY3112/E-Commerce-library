
const Cart = () => {
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
                                <div className="cart__item">
                                    <div className="cart__book">
                                        <img src="https://covers.openlibrary.org/b/id/8479576-L.jpg"className="cart__book--img" alt="" />
                                        <div className="cart__book--info">
                                            <span className="cart__book--title">
                                                title
                                            </span>
                                            <span className="cart__book--price">
                                               $30
                                            </span>
                                             <button className="cart__book--remove">Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input type="number"min={0} defaultValue={1} max={30} className="cart__input"/>
                                    </div>
                                    <div className="cart__total">100$</div>
                                </div>
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
                                <span>$9.38</span>
                            </div>
                            <button className="btn btn__checkout no-cusor" onClick={() => alert(`sorry, wasn,t skilled enought to that :(`)}>Procced to checkout</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default Cart;