import { FaCompressArrowsAlt } from "react-icons/fa";
function Header(){
    return (
        <>
        <header className="head">
            <h2>my website <span>&copy;</span></h2>
            <nav>
                <ul id="lining">
                    <li><a href="#"></a>home</li>
                    <li><a href="#"></a>about me</li>
                    <li><a href="#"></a>services</li>
                    <li><a href="#"></a>my work</li>
                </ul>
            </nav>
            < button id="connectx">
        connect
        <FaCompressArrowsAlt />
    </button>
        </header>
  
    </>
    ) 

}
export default Header