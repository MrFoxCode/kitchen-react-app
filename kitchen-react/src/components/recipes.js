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
           <a href=""> <RecipesAll image = {pancakeImg} name="Pancakes" about="and other Breakfast ideas." /> </a>
           <a href=""> <RecipesAll image = {cakeImg} name="Cakes" about="desserts, cakes and other concepts." /> </a>
           <a href=""> <RecipesAll image = {burgerImg} name="Lunch" about="burger, fast food and other meals." /> </a>
           <a href=""> <RecipesAll image = {drinkImg} name="Drinks" about="alcoholic, healthy and others." /> </a>            
        </div>

        <div className="see-all-recipes">
            <a href = "" alt="see all recipes"><button>See all Recipes</button></a>
        </div>

    </div>

    );
}

export default RecipesMain;

