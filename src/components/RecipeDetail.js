import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import defaultImage from '../static/images/default.png';

const RecipeDetail = ({ recipe, style, className }) => {
  if (!recipe) {
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
        Please select a recipe to see the detail.
      </p>
    );
  }

  return (
    <div style={style} className={classNames('p2 bg-white', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <img
        className="fit"
        alt={recipe.name}
        src={recipe.image}
        onError={e => {
          e.target.src = defaultImage;
        }}
      />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to={`/recipe/${recipe.id}`}>See more</Link>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeDetail;
