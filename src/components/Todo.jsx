import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteAlls, editTodo } from "../Actions/TodoActions";
const Todo = () => {
  const TodoState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [todoVal, setTodoVal] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [empty, setEmpty] = useState(false);

  const todoHandler = () => {
    todoVal.trim()
      ? (() => {
          if (editingIndex) {
            dispatch(editTodo(todoVal, editingIndex));
            setEditingIndex(null);
          } else {
            dispatch(addTodos(todoVal));
          }
          setTodoVal("");
          setEmpty(false);
        })()
      : setEmpty(true);
  };

  useEffect(() => {
    localStorage.setItem("todovalue", JSON.stringify(TodoState));
  }, [TodoState]);

  const deleteAll = () => {
    const deleteTodos = [];
    dispatch(deleteAlls(deleteTodos));
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-between"
      >
        <div className="basis-[73%] md:basis-[90%] flex relative">
          <input
            type="text"
            id="todo"
            value={todoVal}
            placeholder="Add an items...."
            onChange={(e) => setTodoVal(e.target.value)}
            className="w-full pl-[3%] text-[18px] md:text-[22px] text-[#989898] py-1 border-2 border-[#E6E6E6] capitalize outline-none "
          />
          {empty && (
            <span className="absolute bottom-[-25px] text-red-600 font-[600]">
              *Please add todo
            </span>
          )}
        </div>
        <button
          onClick={todoHandler}
          className="basis[8%] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          submit
        </button>
      </form>
      <TodoList
        todoTask={TodoState}
        setTodoVal={setTodoVal}
        setEditingIndex={setEditingIndex}
        setEmpty={setEmpty}
      />
      <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={deleteAll}
      >
        Delete All Todos
      </button>
    </>
  );
};

export default Todo;
