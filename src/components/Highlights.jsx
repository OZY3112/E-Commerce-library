
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";


const Highlights = () => {
  return (
      <section id="highlights">
          <div className="container">
              <div className="row">
                  <h2 className="section__title">
                      why choose  <span className="purple"> libabry</span>.
                  </h2>
                  <div className="highlight__wrapper">


                      <Highlight 
                      icon={<FontAwesomeIcon icon="bolt"/>} 
                      title="Easy and quick!" 
                      para="Get instant access to books you purchased online."
                      />


                      <Highlight 
                      icon={<FontAwesomeIcon icon="book-open"/>} 
                      title="10,000 Books" 
                      para="Library has books in all your favourite categories."
                      />


                      <Highlight 
                      icon={<FontAwesomeIcon icon="tags"/>} 
                      title="Affordable" 
                      para="Get you hand on popular books for as little as 10$."
                      />

                      
                    </div>
              </div>
          </div>
      </section>
  );
};

export default Highlights;