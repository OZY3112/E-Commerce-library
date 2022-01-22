
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {HashRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {

  const [cart, setCart] = useState([])

  function addToCart(book) {
   setCart([...cart, {...book, quantity: 1}])
  } 

  function changequantity(book, quantity) {
    setCart(cart.map(item =>
       item.id === book.id
        ? {
          ...item, 
          quantity:quantity 
        } : item
 
    ))
  }

useEffect(() => {
}, [cart])

 
function removeitem(item) {
  setCart(cart.filter(book => book.id !== item.id))
}
function numboitem(){
  let counter = 0
  cart.forEach(item => {
    counter += +item.quantity
  })
  return counter
}


  
  return (
    <Router>
    <div className="App">
      <Nav numboitem={numboitem()}/>
      <Route path="/" component={Home} exact/>
      <Route path="/books" render={() => <Books books={books}/>} exact/>
      <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>}  exact/>
      <Route path="/cart" render={() => <Cart books={books} cart={cart} changequantity={changequantity} removeitem={removeitem}/>} exact/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
