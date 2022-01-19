
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" component={Home} exact/>
      <Route path="/books" render={() => <Books books={books}/>} exact/>
      <Route path="/books/:id" render={() => <BookInfo books={books}/>} exact/>
      <Route path="/cart" render={() => <Cart books={books}/>} exact/>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
