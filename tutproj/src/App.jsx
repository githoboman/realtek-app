/* eslint-disable no-unused-vars */
/* component can have jsx componetne 
we can create a new componet
the app component  ties aall other component together
 we will be woring with function based compenet
 we are only capable of erturningbasinge componnent
 
 so we ude a segmentbin this case*/

 import Header from "./Header.jsx"
 import Footer from "./Footer.jsx"
 import Food from "./Food.jsx"
 import Body from "./Body.jsx"

function App() {
  return (
    <>
    {/* we can rearrange components by putting them ontop each other */}
    
    <Header/>
    <Body/>
    <Food/>
    <Footer/>
    
    </> 
  );

}

export default App
