import React, {useState} from "react";

//each recipe inside the div recipes in recipes.js
function RecipesAll(props){

    const [inOver, setInOver] = useState(false);


    const recipeBG = {
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${props.image})`
    };

    function changeBG(e){
        e.target.style.backgroundSize = '280px';   
        e.target.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.1)), url(${props.image})`
    };

    function changeBGOut(e){        
        e.target.style.backgroundPosition = 'bottom';     
        e.target.style.backgroundSize = 'cover';   
        e.target.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)), url(${props.image})`
       };
   
    return(
    //the Styles import a image, for each recipe at the recipes section    
    //<div className="recipe" style={{ backgroundImage: `url(${props.image})` }}>       
    <div className="recipe" style={recipeBG} onMouseEnter={changeBG} onMouseLeave={changeBGOut}>       
    <h1>{props.name}</h1>
    <p>{props.about}</p>
    <button alt='See Recipes'>See Recipe</button> 
    </div>
    );
}

export default RecipesAll;