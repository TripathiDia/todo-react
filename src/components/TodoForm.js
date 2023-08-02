import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      console.log("New todo:", { id: Math.floor(Math.random() * 10000), text: input.trim() });

      setInput("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
