import React, { Component } from 'react';
// import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(el => {
            if (el.id === id) {
                return { ...el, task: updatedTask }
            }
            return el;
        });
        this.setState({ todos: updatedTodos });
    }
    render() {
        const todos = this.state.todos.map(el => {
            return <Todo key={el.id} id={el.id} task={el.task} removeTodo={this.remove} updateTodo={this.update} />
        });
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}

export default TodoList;
