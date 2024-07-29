/* import boysx  from "./assets/boys.avif" */
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
            i am  an experienced web developer with  years of experience
            in the field throughout my career 
            i have made many brilliant 
            and responsive websites.
        </p>
        <div className="grid-container">
        <div className="image"></div>
            <div className="landiv"><LuLanguages />
             <p>
                Html,Css,Javascript,React,Next.js</p></div>
            <div className="edudiv"><RiGraduationCapFill />
            <p>college</p></div>
            <div className="prodiv"><GoBriefcase />
            <p>projects
                stactic website, crpto app</p></div>
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