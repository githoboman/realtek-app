import toys from "./assets/toy.avif"
import { HiOutlineFire } from "react-icons/hi";


function Body(){
    return (
        <>

        <div className="centering-img">

        <button className="butdiv">
        <img src={toys} alt="man" />
        </button>
        
        <div id="texty">
        <h4>Hi! am ayomide olaosebikan <HiOutlineFire /> </h4>
        <h1>Frontend web developer based in london</h1>
        </div>
        <div className="button-div"> 
            <button>
        MAIL ME
        </button>

        <button>
            my read.me
        </button>
        </div>

        </div>


        
    </>
    ) 

}
export default Body