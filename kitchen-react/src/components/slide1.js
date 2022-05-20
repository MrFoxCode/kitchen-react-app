import React from "react";

function Slides(){

    const bankofImages = [];


    return(
        //whole container for all divs to be inside
    <div className="container-slides">

        {/*buttons with arrows that are going to be on each side of the slide container*/}
        <div className="arrow1">
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>                        
        </div>
        
        <div className="arrow2">                        
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>  
        </div>
        
        {/*section with all the clickable images that are going to lead to the recipe*/}
        <div className="slidesOne">
            <a id="images-slide"><img src={bankofImages}></img></a>        
        </div>

        {/*little circles under the slide to show the number of the image being displayed*/}
        <div className="circles">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>                       
        </div>

    </div>
        
    )
}

export default Slides;