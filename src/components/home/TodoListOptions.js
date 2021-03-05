const TodoListOptions = (props) => {

    const {TodoNoCompletedCount} = props;

    return (

        <li className="todo-list-options todo-list-item d-flex justify-content-between align-items-center">

            <div className="items-lift">
                <span>{TodoNoCompletedCount} items left</span>
            </div>

            <div className="todo-list-options-btns">
                <button type="button" className={props.isactive === "all" ? "active" : ""} onClick={() => props.showAll()} >all</button>
                <button type="button" className={props.isactive === "active" ? "active" : ""} onClick={() => props.showActive()} >active</button>
                <button type="button" className={props.isactive === "completed" ? "active" : ""} onClick={() => props.showCompleted()} >completed</button>
            </div>

            <button className="clear-completed" onClick={() => props.todoClearAllCompleted()}>clear completed</button>

        </li>

    )

}

export default TodoListOptions;