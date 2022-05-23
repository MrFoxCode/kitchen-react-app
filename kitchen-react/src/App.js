import React from "react";
import Navbar from "./components/Navbar";
import Slides from "./components/slide1";
import RecipesMain from "./components/recipes";
import './App.css';
import AboutMain from "./components/about";
import Footermain from "./components/footer";
import SideBarMain from "./components/sidebar";



function App(){
//-------------
  return(    
      <div>
        <Navbar />
        <SideBarMain />        
        <Slides />
        <AboutMain />
        <RecipesMain />        
        <Footermain />        
      </div>
  );

}


export default App;