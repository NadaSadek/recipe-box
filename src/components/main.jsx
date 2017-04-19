import React from 'react';
import ReactDOM from 'react-dom';
import  RecipesPanel  from './recipes-panel.jsx';
import AddRecipeButton from './add-recipe.jsx';


class Main extends React.Component {
  render() {
    return (
      <div>
        <RecipesPanel />
        <AddRecipeButton />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(
  <Main />,
  app
);
