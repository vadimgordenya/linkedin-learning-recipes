import React from 'react';

const RecipeDetail = (props) => {
  if (!props.recipe) {
    return <p style={props.style}>Please select a recipe to see the detail.</p>
  }

  return (
    <div style={props.style}>
      <h2>{props.recipe.name}</h2>
      <img src={props.recipe.image} />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {
          props.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        }
      </ul>
      <h3>Steps</h3>
      <ol>
        {
          props.recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))
        }
      </ol>
    </div>
  );
}

export default RecipeDetail;