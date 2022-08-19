import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(todo.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleClick}
        key={todo.id + todo.task}
        id={todo.id}
        value={todo.id}
        name="todo"
      />
      <label className={todo.complete ? "todo strike" : "todo"}>
        {todo.task}
      </label>
      <br />
      {todo.complete === true ? new Date(todo.dateUpdated).toISOString() : ""}
    </div>
  );
};

export default ToDo;
