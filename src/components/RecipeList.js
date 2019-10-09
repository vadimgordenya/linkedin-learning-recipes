import React from 'react';

const RecipeList = (props) => {
  return (
    <div style={props.style}>
      <h2>Recipes</h2>
      <ul>
        <li>
          <span>1 Creepy Halloween Skull Cupcakes</span>
          <span>Deessert</span>
        </li>
        <li>
          <span>2 Creepy Halloween Skull Cupcakes</span>
          <span>Deessert</span>
        </li>
        <li>
          <span>3 Creepy Halloween Skull Cupcakes</span>
          <span>Deessert</span>
        </li>
      </ul>
    </div>
  );
}

export default RecipeList;