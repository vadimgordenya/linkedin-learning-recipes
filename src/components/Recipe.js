import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
      error: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ recipe });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { recipe, error } = this.state;

    if (error) {
      return <div className="px4">Somethink wrong!</div>;
    }

    return (
      <div>
        <RecipeDetail recipe={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
};

export default Recipe;
