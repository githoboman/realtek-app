/* import boysx  from "./assets/boys.avif" */

/* import { Button } from "@/components/ui/button" */
import { LuLanguages } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";


function Food () {
/* 
    const food1 = "orange";
    const food2 = "banana";*/ 
     return (
        <>
        {/* <img src={boysx} alt="mano" /> */}
        <div id="centered">

        <p className="craze">
            i am  an experienced web developer with  years of  experience
                in the field throughout my career 
            i have made many brilliant 
            and responsive websites.
        </p>

        <div className="grid-container">
            <img src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww" alt="PICZ" className="VIBEIM" />


        <div className="image"></div>
            <div className="landiv"><LuLanguages />
             <p> Languages:
                html, css,javascript,
                react.
                </p>
                </div>
            <div className="edudiv"><RiGraduationCapFill />
            <p>college: yabatech</p></div>
            <div className="prodiv"><GoBriefcase />
            <p>
                stactic website, crypto app, responsive portfolios</p></div>
        </div>

        </div>

       {/*   <ul>
            <li>apple</li>
            <li>{food1} </li>
            <li>{food2.toUpperCase()}</li>
        </ul> */ }
        </>
    )

}

export default Food

/* if you are writing javascript in a return statement 
 you have to use curly braces */