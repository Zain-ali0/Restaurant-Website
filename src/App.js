import React from "react";
import  { NavBar  , Header , About , Menu, Chef , Video, PhotoGallery, Footer} from "./components";
const App = () => {
    return(
        <>
            <NavBar/>
            <Header/>
            <About/>
            <Video/>
            <Chef/>
            <Menu/>
            <PhotoGallery/>
            <Footer/>
        </>
    );
}

export default App;