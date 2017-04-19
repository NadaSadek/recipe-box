import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';
import PanelGroup  from 'react-bootstrap/lib/PanelGroup';
import Accordion from 'react-bootstrap/lib/Accordion';
import Dish from './dish.jsx';

export default class RecipesPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1"
    };
  }

   handleSelect = (activeKey) => {
     this.setState({ activeKey });
   };

  componentWillMount() {
    if(!localStorage.getItem('_username_recipes')) {
      const arr = [{"id": "1", "title": "Salad", "ingredients": ["Tomatoes", "Olives", "Peppers", "Onions", "Mushrooms"]},
      {"id": "2", "title": "Pasta", "ingredients": ["Penne", "Tomato Sauce", "Oil"]}];
      localStorage.setItem("_username_recipes",JSON.stringify(arr));
    }
  }

  dishesList = () => {
   const array = (localStorage.getItem('_username_recipes') !== null)? JSON.parse(localStorage.getItem("_username_recipes")): [];
   const list = array.map((dish) =>
   <Dish key = {dish.id} name = {dish.title} ingredients = {dish.ingredients}/>
 );
 return list;
  }
  render() {
    return (
       <PanelGroup  activeKey = {this.state.activeKey} onSelect = {this.handleSelect} accordion>
       {this.dishesList()}
     </PanelGroup>
    );
  }
}
