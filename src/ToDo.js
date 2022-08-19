import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const [checked, setChecked] = React.useState(todo.complete);
  const handleClick = (e) => {
    setChecked(e.currentTarget.checked);
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      value={todo.id}
      key={todo.id + todo.task}
      id={todo.id}
      name="todo"
      onClick={handleClick}
    >
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label className={todo.complete ? "todo strike" : "todo"}>
        {todo.task}
      </label>
    </div>
  );
};

export default ToDo;
