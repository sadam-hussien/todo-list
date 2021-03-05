import React, {useEffect, useState} from "react";
import TodoEdit from "./TodoEdit";
import TodoListOptions from "./TodoListOptions";

// drag and drop plugin
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const TodoList = (props) => {

    const {items, todoStatus, todoDelete, todoShowEdit, todoEdit, TodoNoCompletedCount} = props;

    const [list, setList] = useState(items);

    const [isactive, setIsActive] = useState("all");

    useEffect( () => {

        setList(items);

    }, [items]);

    const showAll = () => {
        setList(items);
        setIsActive("all")
    }

    const showActive = () => {
        let activeList = items.filter( i => i.completed === false );
        setList(activeList);
        setIsActive("active");
    }

    const showCompleted = () => {
        let completedList = items.filter( i => i.completed !== false );
        setList(completedList)
        setIsActive("completed")
    }

    const submitTodoEditi = (id, value) => {

        todoEdit(id, value);

    }

    // // drag and drop
    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list);
    //     const [removed] = result.splice(startIndex, 1);
    //     result.splice(endIndex, 0, removed);
    
    //     return result;
    // };
    // const onDragEnd = (param) => {
    //     if (!param.destination) {
    //         return;
    //     }
    
    //     const theItems = reorder(
    //         items,
    //         param.destination.index,
    //         param.source.index,
    //     );
    
    //     setList(theItems);
    // }

    const item = list.map( (item, index) => {

        return(
            !item.isEdit ?
                // <Draggable key={index} draggableId={"dro-" + index} index={index}>
                    // {(provided, snapshot) => (
                        // ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        <li  key={index} className="todo-list-item d-flex align-items-center justify-content-between">

                            {/* todo list info (check, text)  */}
                            <div className="todo-list-item-info d-flex align-items-center">

                                <div className="check-box">

                                    <input type="checkbox" 
                                        id={"todo-check-complete-" + index} 
                                        checked={item.completed}
                                        onChange={() => todoStatus(index)} />

                                    <label htmlFor={"todo-check-complete-" + index}>
                                        <img src="./images/icon-check.svg" alt="check todo" className="img-fluid" />
                                    </label>

                                </div>

                                <div className="todo-list-item-info-text">
                                    <h4 className={item.completed ? "text text-capitalize completed-todo" : "text text-capitalize"}>{item.title}</h4>
                                </div>

                            </div>

                            {/* todo list action (delete)  */}
                            <div className="todo-list-action">
                                <button type="button" className="todo-list-action-edit" onClick={() => todoShowEdit(index)}>
                                    <img src="images/icon-edit.svg" alt="edit todo item" className="img-fluid" />
                                </button>

                                <button type="button" onClick={() => todoDelete(index)} >
                                    <img src="images/icon-cross.svg" alt="delete todo item" className="img-fluid" />
                                </button>
                            </div>                

                        </li>

                    // )}
                // </Draggable>
            :
                // <Draggable key={index} draggableId={index} index={index}>
                    <TodoEdit key={index} index={index} title={item.title} submitTodoEditi={submitTodoEditi} />
                // </Draggable>
            
        )

    });

    return (
        <section className="todo-list">

            {/* <DragDropContext onDragEnd={onDragEnd}> */}

                {/* <Droppable droppableId="1"> */}

                {/* {(provided, snapshot) => ( */}

                    {/* <div {...provided.droppableProps} ref={provided.innerRef} > */}

                        <ul className="list-unstyled">

                            {item}

                            {/* {provided.placeholder} */}

                            <TodoListOptions 
                                TodoNoCompletedCount={TodoNoCompletedCount()} 
                                showAll={showAll} 
                                showActive={showActive} 
                                showCompleted={showCompleted} 
                                isactive={isactive}
                                todoClearAllCompleted={props.todoClearAllCompleted} />

                        </ul>

                    {/* </div> */}

                {/* )} */}
                {/* </Droppable> */}

            {/* </DragDropContext> */}

        </section>
    )

}

export default TodoList;