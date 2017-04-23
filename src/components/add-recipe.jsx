import React from 'react';
import ReactDOM from 'react-dom';
import Panel  from 'react-bootstrap/lib/Panel';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/lib/Modal'

export default class AddRecipeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddRecipeModal: false,
      title: "",
      ingredients: "separate ingredients by ,"
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
    let recipesList = (localStorage.getItem('_username_recipes') !== null)? JSON.parse(localStorage.getItem("_username_recipes")): [];
    const id = parseInt(recipesList[recipesList.length - 1].id) + 1;
    const newRecipe  = {"id": id.toString(), "title": this.state.title, "ingredients": this.state.ingredients.split(",")}
    recipesList.push(newRecipe);
    localStorage.setItem("_username_recipes",JSON.stringify(recipesList));
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
              <input type='text' name="title" onChange={this.handleInputChange} className="form-control"/>
              <label>Ingredients</label>
              <textarea type='text' name="ingredients" onChange={this.handleInputChange} className="form-control"/>
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
