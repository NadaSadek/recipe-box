import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';
import Dish from './dish.jsx';

export default class RecipesPanel extends React.Component {

  render() {
    return (
     <div>
       <Panel header="Recipes Book" bsStyle="primary">
       <Dish name={} />
       </Panel>
      </div>
    );
  }
}
