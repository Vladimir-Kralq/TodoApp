import { useState } from "react";
import styeles from "./form.module.css";
export default function Form({ todos, setToDos }) {
  const [todo, setToDo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...todos, todo]);
    setToDo({ name: "", done: false });
  }
  return (
    <form className={styeles.todoform} onSubmit={handleSubmit}>
      <div className={styeles.inputContainer}>
        <input
          className={styeles.moderninput}
          onChange={(e) => setToDo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button className={styeles.modernButton} type="submit">
          Add{" "}
        </button>
      </div>
    </form>
  );
}
