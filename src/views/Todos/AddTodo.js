import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            toast.error('Missing title!!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            id: '',
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button className="add"
                    onClick={() => this.handleAddTodo()}>
                    Add</button>
            </div>
        )
    }
}

export default AddTodo;