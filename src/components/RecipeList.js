import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, recipes, favorites, ...props }) => (
  <ul style={style} className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        {...props}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  style: PropTypes.object,
  favorites: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeList;
