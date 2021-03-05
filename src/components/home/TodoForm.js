import React, {useState} from "react";

const TodoForm = (props) => {

    const {todoAdd} = props;

    const [item, setItem] = useState({

        "title": "",
        "completed": false,
        "isEdit": false

    });

    // handle change input
    const inputChange = (e) => {

        setItem({
            ...item,
            "title": e.target.value,
        })

    }

    // submit handle
    const submitHandle = (e) => {

        e.preventDefault();

        if (item.title !== "") {
            todoAdd(item);

            setItem({
                ...item,
                "title": "",
            })
        }

    }

    return (

        <section className="todo-form">
            <form className="todo-form-add" onSubmit={submitHandle}>
                <div className="form-group">
                    <input type="text" 
                        placeholder="Create a new Todo..." 
                        id="add-todo" 
                        className="form-control" 
                        value={item.title} 
                        onChange={inputChange}
                        autoComplete="off" />
                    <label htmlFor="add-todo"></label>
                </div>
            </form>
        </section>

    );

}

export default TodoForm;