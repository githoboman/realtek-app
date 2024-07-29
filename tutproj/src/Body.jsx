import toys from "./assets/toy.avif"
import { HiOutlineFire } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";


function Body(){
    return (
        <>

    

    
    <div id="img-id">
        <img src={toys} alt="man" />
        </div>
        
        <div id="texty">
        <h4>Hi! am ayomide olaosebikan <HiOutlineFire /> </h4>
        <h1>Frontend web developer based in london</h1>
        </div>
        <div className="button-div"> 
            <button id="butone">
        mail me <FaArrowTrendUp />
        </button>
    

        <button id="buttwo">
            my read.me <FaDownload />
        </button>
        </div>



        
    </>
    ) 

}
export default Body