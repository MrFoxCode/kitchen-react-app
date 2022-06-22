import React from "react";
import RecipesAll from "./recipeseach";
import pancakeImg from "../images/pancake.jpg";
import cakeImg from "../images/cake.jpg";
import drinkImg from "../images/drink.jpg";
import burgerImg from "../images/burger.jpg";

function RecipesMain(){

    return(

    <div className="all-containers">
        
        <div className="recipes">
           <a href=""> <RecipesAll image = {pancakeImg} name="Category 1" about="about recipe1" /> </a>
           <a href=""> <RecipesAll image = {cakeImg} name="Category 2" about="about recipe2" /> </a>
           <a href=""> <RecipesAll image = {burgerImg} name="Category 3" about="about recipe3" /> </a>
           <a href=""> <RecipesAll image = {drinkImg} name="Category 4" about="about recipe4" /> </a>            
        </div>

        <div className="see-all-recipes">
            <a href = "" alt="see all recipes">See all Recipes</a>
        </div>

    </div>

    );
}

export default RecipesMain;

