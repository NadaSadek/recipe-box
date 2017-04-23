import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';

export default class Dish extends React.Component {
  constructor(props) {
    super(props);
  }
  ingredientsFormat = (ingredients) => {
    return list.join();
  };

  render() {
    return (
       <Panel header = {this.props.name} eventKey = {this.props.key} >
        {this.ingredientsFormat(this.props.ingredients)}
       </Panel>
    );
  }
}
