import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodos } from "../Actions/TodoActions";

const TodoList = ({
  setEditingIndex,
  setTodoVal,
  setEmpty,
}) => {
  const dispatch = useDispatch();
  const TodoState = useSelector(state=> state);
  const editTodo = (id) => {
    setEmpty(false);
    const index = TodoState.find((item) => item.id === id);
    setTodoVal(index.todoValue);
    setEditingIndex(index.id);
  };

  const completeHandler = (idx) => dispatch(completeTodo(idx));

  return (
    <ul className="my-8">
      {TodoState.map((el) => {
        return (
          <li
            key={el.id}
            className={`flex justify-between border-b-2 border-[#E6E6E6] items-center py-2 cursor-pointer`}
          >
            <span
              className={`block basis-[60%] md:basis-[80%] font-[600] text-[18px] ${
                el.completed ? "line-through" : ""
              } `}
              onClick={() => completeHandler(el.id)}
            >
              {el.todoValue}
            </span>
            <button
              onClick={() => editTodo(el.id)}
              className="basis-[10%] mr-2  md:basis-[8%] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTodos(el.id))}
              className="basis-[10%] md:basis-[8%] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
