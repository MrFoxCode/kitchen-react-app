import React from "react";
import RecipesAll from "./recipeseach";

function RecipesMain(){

    return(

    <div className="all-containers">
        
        <div className="recipes">
           <a href=""> <RecipesAll name="Name 1" about="about recipe1" /> </a>
           <a href=""> <RecipesAll name="Name 2" about="about recipe2" /> </a>
           <a href=""> <RecipesAll name="Name 3" about="about recipe3" /> </a>
           <a href=""> <RecipesAll name="Name 4" about="about recipe4" /> </a>
            
        </div>

        <div className="see-all-recipes">
            <a href = "">See all Recipes</a>
        </div>

    </div>

    );
}

export default RecipesMain;

