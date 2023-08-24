import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [food, setFood] = useState(foodsJson)

  const [foodToRender, setFoodToRender] = useState(food)

  const handleDeleteFood = (id) => {
    let filterFoodArr = food.filter((eachFood) => eachFood.id !== id)
    setFood(filterFoodArr)
}

  return (
 <div className="App">
    
   <AddFoodForm food={food} setFood={setFood} setFoodToRender={setFoodToRender}/>  
      
      {food.map((eachFood,i)=>(

           <FoodBox key ={i} food={eachFood} onClick ={() => handleDeleteFood(eachFood.id)} />
           
      ))}

 
 </div>
      


   
  );
}

export default App;
