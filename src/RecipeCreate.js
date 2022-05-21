import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initalFormState = {
    name:'',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }
    const [formData, setFormData] = useState(initalFormState)


  const handleText = ({target}) => {
    
      setFormData({...formData,
        [target.name]: target.value
      })
    
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    createRecipe(formData)
    setFormData(initalFormState)
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
         <tbody>
         
          <tr>
            <td>
              <input name="name" type="text" onChange={handleText} value={formData.name} placeHolder="Name" ></input>
            </td>
            
 
            <td>
              <input name="cuisine" type="text" onChange={handleText} value={formData.cuisine} placeholder="Cuisine" ></input>
            </td>
            
          
            <td>
              <input name="photo" type="url" onChange={handleText} value={formData.photo} placeholder="url" ></input>
            </td>
            
          
            <td>
              <textarea name="ingredients" onChange={handleText} value={formData.ingredients} placeholder="Ingredients"></textarea>
            </td>
            
            <td>
              <textarea name="preparation" onChange={handleText} value={formData.preparation} placeholder="Preparation" ></textarea>
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
export default RecipeCreate;
