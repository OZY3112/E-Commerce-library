
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";


const Highlights = () => {
  return (
      <section id="highlights">
         <div className="custom-shape-divider-top-1642696561">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>

</div>
          <div className="container">
              <div className="row">
                  <h2 className="section__title higlight__title">
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
          <div className="custom-shape-divider-bottom-1642700502">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
      </section>
  );
};

export default Highlights;