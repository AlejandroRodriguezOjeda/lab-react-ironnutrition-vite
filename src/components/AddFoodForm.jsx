// Your code here

import { useState } from "react"

function AddFoodForm(props){

    const [nameInput, setNameInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState(0)
    const [servingsInput, setServingsInput] = useState(0)

    const handleNameChange = (event) =>{
        setNameInput(event.target.value)
    }

    const handleAddImage = (event) =>{
        setImageInput(event.target.value)
    }

    const handleCaloriesChange =(event) =>{
        setCaloriesInput(event.target.value)
    }
    const handleServingsChange = (event) =>{
        setServingsInput(event.target.value)
    }

    const handleSubmitForm = (event) =>{
        event.preventDefault()
let newFood ={
    name:nameInput,
    image:imageInput,
    calories:caloriesInput,
    servings:servingsInput
}
let clone = JSON.parse(JSON.stringify(props.food))
clone.unshift(newFood)
props.setFood(clone)

props.setFoodToRender(clone)

    }
    return(
       
            <form onSubmit={handleSubmitForm}>
                <div> 
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" onChange={handleNameChange} value={nameInput} />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" onChange={handleAddImage} value={imageInput}/>
                    </div>
                    <div>
        <label htmlFor="calories">Calories</label>  
        <input type="number" name="calories" onChange={handleCaloriesChange} value={caloriesInput}/>
         </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input type="number" name="servings" onChange={handleServingsChange} value={servingsInput} />
         </div>
          
          <button type="submit" >Create</button>
       
      
            </form>
        
    )
}

export default AddFoodForm