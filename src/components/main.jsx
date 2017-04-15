import React from 'react';
import ReactDOM from 'react-dom';
import  RecipesPanel  from './recipes-panel.jsx';
import { Button } from 'react-bootstrap';

class Main extends React.Component {

  render() {
    return (
      <div>
      <RecipesPanel />
      <Button bsStyle="primary">Add Recipe</Button>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
