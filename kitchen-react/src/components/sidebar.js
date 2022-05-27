import React, {useState} from "react";

function SideBarMain(){


    //disable side-bar function (Vanilla JS)
     const closeSidebar = ()=>{
        let sidebar = document.getElementById('sidebarid');
        sidebar.classList.remove('bar-active');
    };


    return(

        <div id ="sidebarid" className="side-bar">
            
            <div onClick={closeSidebar}className="close-sidebar">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>

            <div className="bar-links">
                <ul>
                    <h3>Section 1</h3>
                    <li><a>Tab 1</a></li>
                    <li><a>Tab 2</a></li>
                    <li><a>Tab 3</a></li>
                    <li><a>Tab 4</a></li>
                    <h3>Section 2</h3>
                    <li><a>Tab 5</a></li>
                    <li><a>Tab 6</a></li>
                </ul>
            </div>

        </div>
    );

}


export default SideBarMain;