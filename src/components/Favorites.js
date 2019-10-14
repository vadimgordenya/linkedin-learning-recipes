import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite }) => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(item => state.favorites.includes(item.id))}
      favorites={state.favorites}
      onFavorited={toggleFavorite}
    />
  </div>
);

Favorites.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Favorites;
