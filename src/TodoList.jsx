// TodoList.js
import React, { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const TodoList = () => {
  const { language } = useContext(LanguageContext);

  const [todos, setTodos] = useState({});
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const taskId = Date.now().toString();
      setTodos({
        ...todos,
        [taskId]: {
          en: newTodo,
          ka: "დავალება ახლა შექმნილია",
          isCompleted: false,
        },
      });
      setNewTodo("");
    }
  };

  const handleEditTodo = (taskId, updatedTodo) => {
    setTodos({
      ...todos,
      [taskId]: { ...todos[taskId], [language]: updatedTodo },
    });
  };

  const handleToggleComplete = (taskId) => {
    setTodos({
      ...todos,
      [taskId]: { ...todos[taskId], isCompleted: !todos[taskId].isCompleted },
    });
  };

  const handleDeleteTodo = (taskId) => {
    const updatedTodos = { ...todos };
    delete updatedTodos[taskId];
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2>{language === "en" ? "Todo List" : "დავალებების სია"}</h2>
      <div className="todo-input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder={
            language === "en"
              ? "Enter your todo..."
              : "შეიყვანეთ ახალი დავალება..."
          }
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="todo-add-button">
          {language === "en" ? "Add Todo" : "დაამატე დავალება"}
        </button>
      </div>
      <ul className="todo-list">
        {Object.keys(todos).map((taskId) => (
          <li
            key={taskId}
            className={`todo-item${
              todos[taskId].isCompleted ? " completed" : ""
            }`}
          >
            {todos[taskId].isEditing ? (
              <input
                type="text"
                value={todos[taskId][language]}
                onChange={(e) => handleEditTodo(taskId, e.target.value)}
                onBlur={() =>
                  setTodos({
                    ...todos,
                    [taskId]: { ...todos[taskId], isEditing: false },
                  })
                }
              />
            ) : (
              <span
                onClick={() =>
                  setTodos({
                    ...todos,
                    [taskId]: { ...todos[taskId], isEditing: true },
                  })
                }
              >
                {todos[taskId][language]}
              </span>
            )}
            <div className="todo-actions">
              <button onClick={() => handleToggleComplete(taskId)}>
                {todos[taskId].isCompleted ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDeleteTodo(taskId)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
