import React, { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const inputeRef = useRef();

  const [todolist, setTodoList] = useState(localStorage.getItem("todo")?
JSON.parse(localStorage.getItem("todo")) :[]);

  const add = () => {
    const inputText = inputeRef.current.value.trim();

    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputeRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((Todo) => {
        if (Todo.id === id) {
          return { ...Todo, isComplete: !Todo.isComplete };
        }
        return Todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todolist))
  }, [todolist]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-12" src="/assets/todo_icon.png" alt="" />
        <h1 className="  text-3xl font-bold ">To-do-List</h1>
      </div>

      {/* inpute box */}

      <div className="flex items-center my-7 bg-gray-300 rounded-full">
        <input
          ref={inputeRef}
          className="bg-transparent border-0 outline-none flex-1 h-13 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-400 w-30 h-13
          text-white text-lg font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/*  Todo-list */}
      <div>
        {todolist.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
