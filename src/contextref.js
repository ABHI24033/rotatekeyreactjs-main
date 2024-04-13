import React, { Component } from "react";

export const TodoContext = React.createContext();

export default class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: false, todoList: [] };
    // this.state = { todo: '', todoList: [], editButtonClicked: false, editedTodo: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    // this.handleEditClick = this.handleEditClick.bind(this);
    // this.handleTodoChange = this.handleTodoChange.bind(this);
    // this.updateTodo = this.updateTodo.bind(this);
  }

  handleInputChange(event) {
    this.setState({ todo: event });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      todo: "",
      todoList: [...this.state.todoList, this.state.todo],
    });
  }

  /*     handleEditClick(event) {
        event.preventDefault();
        this.setState({editButtonClicked: true});
    } */

  /*     handleTodoChange(event) {
        this.setState({editedTodo: event.target.value});
    } */

  /*     updateTodo(event) {
        event.preventDefault();
        this.setState({editedTodo: this.state.editedTodo});
    } */

  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange,
          addTodo: this.addTodo,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
      /* <TodoContext.Provider value={{...this.state, handleInputChange: this.handleInputChange, addTodo: this.addTodo, handleEditClick:this.handleEditClick, handleTodoChange: this.handleTodoChange, updateTodo: this.updateTodo}}>
                {this.props.children}
            </TodoContext.Provider> */
    );
  }
}
