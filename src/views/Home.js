import React, {Component} from "react";

// header
import Header from "../components/home/Header";

// todo form
import TodoForm from "../components/home/TodoForm";

// todo list
import TodoList from "../components/home/TodoList";

class Home extends Component {

    state = {
        items: [
            {
                "title": "read for 1 hours",
                "completed": true,
                "isEdit": false
            },
            {
                "title": "todo app on frontend mentor",
                "completed": false,
                "isEdit": false
            }
        ],
    }

    componentDidMount() {

        this.TodoNoCompletedCount()

    }

    componentDidUpdate() {

        this.TodoNoCompletedCount()

    }

    // add new task
    todoAdd = (item) => {

        let items = this.state.items;

        items.unshift(item);

        this.setState({
            items: items,
        });

    }

    // checked task
    todoStatus = (id) => {

        let items = this.state.items;

        let theItem = items[id];

        theItem.completed = !theItem.completed;

        this.setState({
            items: items
        });

    }

    // delete task
    todoDelete = (id) => {

        let items = this.state.items;

        items.splice(id, 1);

        this.setState({
            items: items
        });

    }

    // show editing task
    todoShowEdit = (id) => {

        let items = this.state.items;

        let item = items[id];

        item.isEdit = !item.isEdit;

        this.setState({
            items: items
        });

    }

    // edit todo
    todoEdit = (id, value) => {

        let items = this.state.items;

        let item = items[id];

        item.title = value;

        this.setState({
            items: items
        });

        this.todoShowEdit(id);

    }

    // noCompleted count
    TodoNoCompletedCount = () => {
        let noCompletedItems = this.state.items.filter( i => i.completed === false );
        let noCompletedCount = noCompletedItems.length;
        return noCompletedCount;
    }

    // clear all completed
    todoClearAllCompleted = () => {

        let items = this.state.items;

        let filterCompleted = items.filter( item => item.completed === false);

        this.setState({items: filterCompleted});

    }

    render () {

        return (
            <section className="home-page page padding-section">
                <div className="container">
                    <div className="content">
                        <Header />

                        <TodoForm 
                            items={this.state.items} 
                            todoAdd={this.todoAdd} />

                        <TodoList 
                            items={this.state.items} 
                            todoStatus={this.todoStatus} 
                            todoDelete={this.todoDelete} 
                            todoShowEdit={this.todoShowEdit}
                            todoEdit={this.todoEdit}
                            TodoNoCompletedCount={this.TodoNoCompletedCount}
                            todoClearAllCompleted={this.todoClearAllCompleted} />

                    </div>
                </div>
            </section>
        )
    }

}

export default Home;