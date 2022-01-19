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
                                        <img src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0626/9780062674685.jpg"className="cart__book--img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default Cart;