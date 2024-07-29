
import { HiOutlineFire } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";


function Body(){
    return (
        <>

    

    
    <div id="img-id">
        <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww" alt="pic" className="bodyim" />
    
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