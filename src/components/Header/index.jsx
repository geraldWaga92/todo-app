import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/todo-logo.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Header({ onAddTask }) {

  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo.png" />
      <p>Todo Tasks</p>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" value={title} onChange={onChangeTitle} />
        <button>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
