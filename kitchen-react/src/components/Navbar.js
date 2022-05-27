import React, {useState} from "react";
import Searchlogo from "../images/searchicon.png";



function Navbar(){

//------------------------------
//         FUNCTIONS 
//------------------------------    

    //Click function in Searhbar
     const searchButton = () =>{
        console.log("clicked");
        document.getElementById('searchinput').value ="";   
       };


    //active side-bar function (Vanilla JS)
    const burgerActive = ()=>{
        let sidebar = document.getElementById('sidebarid');
        sidebar.classList.add('bar-active');
    };


//----------------------------------
//             JSX
//----------------------------------

    //everything that gonna be displayed
    return(
        <div className="navbar">            
            
            <ul>
                <li><a href = "" id="nav-home">Home</a></li>
                <li><a href = "" id="nav-about">About</a></li>
                <li><a href = "" id="nav-recipes">Recipes</a></li>
                <li><a href = "" id="nav-yourlist">Your List</a></li>
            </ul>
            {/*Burger on left side, when clicked a side bar scrolls to the view*/}
            <div onClick={burgerActive} className="burgerbar">
                <a id="burger1"></a>
                <a id="burger2"></a>
                <a id="burger3"></a>            
            </div>
            
            <div className="searchbar">
                <input type="text" id="searchinput" placeholder="Search"></input>
                <button onClick={searchButton} type="submit"> <img src={Searchlogo}/></button>           
            </div>

        </div>
        
    );   
}


export default Navbar;