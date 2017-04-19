import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal'

export default class AddRecipeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRecipeModal: false
    }
  }
  openModal = () => {
    this.setState({
      showAddRecipeModal: true
    });
  };
  closeModal = () => {
    this.setState({
      showAddRecipeModal: false
    });
  };
  saveRecipe = () => {
    this.closeModal();
  };
  render() {
    return (
     <div>
       <Button bsStyle="primary" onClick={this.openModal}>Add Recipe</Button>
         <Modal className="static-modal" show={this.state.showAddRecipeModal}>
             <Modal.Header>
               <Modal.Title>New Recipe</Modal.Title>
             </Modal.Header>

             <Modal.Body>
               <form>
               <label>Recipe</label>
               <input type='text' className="form-control"/>
               <label>Ingredients</label>
               <textarea type='text' className="form-control"/>
               </form>
             </Modal.Body>

             <Modal.Footer>
               <Button onClick={this.closeModal}>Close</Button>
               <Button bsStyle="primary" onClick={this.saveRecipe}>Save changes</Button>
             </Modal.Footer>
         </Modal>
      </div>
    );
  }
}
