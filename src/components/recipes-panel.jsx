import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';
import Dish from './dish.jsx';

export default class RecipesPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  dishesList = () => {
   const array = ['pasta', 'rice', 'salad'];
   const list = array.map((dish) =>
    <Dish name = {dish.name} />
 );
 return list;
  };
  render() {
    return (
     <div>
       <Panel header="Recipes Book" bsStyle="primary">
       {this.dishesList().bind(this)}
       </Panel>
      </div>
    );
  }
}
