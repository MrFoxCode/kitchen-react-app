import React from "react";

//each recipe inside the div recipes in recipes.js
function RecipesAll(props){
    return(    
    <div className="recipe">
    <h1>{props.name}</h1>
    <p>{props.about}</p>
    <button>See Recipe</button> 
    </div>
    );
}

export default RecipesAll;