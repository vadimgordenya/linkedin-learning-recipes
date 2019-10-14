import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { currentRecipe } = this.state;
    const { props } = this.state;
    const { recipes, favorites } = props;
    const { toggleFavorite } = this.props;

    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={toggleFavorite}
            />
          </div>
          <RecipeDetail
            recipe={currentRecipe}
            className="ml4"
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  toggleFavorite: PropTypes.func,
};

export default Home;
