import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';
import { Button } from 'react-bootstrap';

export default class dish extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <div>
       <Panel bsStyle="primary">
        {this.props.name}
       </Panel>
      </div>
    );
  }
}
