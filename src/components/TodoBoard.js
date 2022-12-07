import React from "react";
import TodoItem from './TodoItems'

function TodoBoard(props) {
  return (
    <div className="todo-board">
      <h4>TodoBoard</h4>
      {props.todoArr.map((item)=><TodoItem item={item}/>)}
    </div>
  );
}

export default TodoBoard;
