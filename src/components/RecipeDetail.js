import React from 'react';

const RecipeDetail = (props) => {
  return (
    <div style={props.style}>
      <h2>Creepy Halloween Skull Cupcakes</h2>
      <img src="" alt="" />
      <div>
        <span>Deserts</span>
        <span>1200</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
      </ol>
    </div>
  );
}

export default RecipeDetail;