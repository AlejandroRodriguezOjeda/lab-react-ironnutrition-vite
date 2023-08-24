import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
// import foodsJson from "./foods.json";

function FoodBox({food, onClick}){

    
    return(
        
        <div>
           
         <p>{food.name}</p>

         <img src={food.image} alt="FoodImage" style={{width: "200px"}}/>

         <p>Calories: {food.calories}</p>
         <p>Servings: {food.servings}</p>

         <p>
            <b>Total Calories: {food.calories * food.servings}</b> kcal
         </p>

         <button onClick={onClick}>Delete</button>

       </div>
    )
}

export default FoodBox