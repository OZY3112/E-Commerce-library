import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

const Homes = () => {
    return ( 
        <>
        <Landing/> 
      <Highlights/>
      <Featured/>
      <Discounted/>
      <Explore/>
        </>
     );
}
 
export default Homes;