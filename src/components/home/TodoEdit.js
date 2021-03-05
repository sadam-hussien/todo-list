import React, {useState, useRef, useEffect} from "react";

const TodoEdit = (props) => {

    const {index, title, submitTodoEditi} = props;
    
    const [newValue, setNewValue] = useState(title);

    const inpRef = useRef();

    useEffect( () => {

        inpRef.current.focus();

    }, []);

    const handleChange = (e) => {

        setNewValue(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        submitTodoEditi(index, newValue);

    }

    return (

        <li className="todo-list-item-edit todo-list-item d-flex align-items-center">
            <form onSubmit={handleSubmit}>
                <div className="form-group d-flex align-items-center position-relative">
                    <label htmlFor={"todo-list-item-edit-" + index}>
                        <img src="images/icon-edit.svg" alt="todo edit input" className="img-fluid" />
                    </label>
                    <input type="text" 
                        className="form-control" 
                        id={"todo-list-item-edit-" + index}
                        defaultValue={title} 
                        onChange={handleChange}
                        autoComplete="off"
                        ref={inpRef} />
                    <button type="submit">
                        <img src="images/icon-check.svg" alt="todo edit check" className="img-fluid" />
                    </button>
                </div>
            </form>
        </li>

    );

}

export default TodoEdit;