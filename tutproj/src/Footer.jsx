import {FaGitAlt } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiFirebaseFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";


function Footer () {
    return (
        <>
         <p> Get in touchwith me</p>
        <div id="divs">
            <div><h1><FaGitAlt/></h1></div>
            <div><h1><VscVscodeInsiders /></h1></div>
            <div><h1><RiFirebaseFill /></h1></div>
            <div><h1><FaFigma /></h1></div>
        </div>
        <footer>
            <p>&copy;{new Date().getFullYear()}  ENGLISH </p>
          
        </footer>

        </>

    );
    
}

export default Footer

/* we can inject some javascript  
to inject javascript use curly barces new date (ob) */