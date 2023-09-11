import {
  Add_TODO,
  DELETE_TODO,
  EDIT_TODO,
  DELETE_ALL_TODO,
  COMPELETE_TODO,
} from "../Actions/TodoActions";
const storedValue = localStorage.getItem("todovalue");
const initialTodo = storedValue ? JSON.parse(storedValue) : [];

const initialState = initialTodo;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          todoValue: action.payload,
          completed: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((del) => del.id !== action.payload);

    case EDIT_TODO:
      return state.map((edit) =>
        edit.id === action.payload.id
          ? (() => ({
              ...edit,
              todoValue: action.payload.todoValue,
              id: action.payload.id,
            }))()
          : edit
      );

    case COMPELETE_TODO:
      return state.map((item) =>
        item.id === action.payload
          ? (() => ({ ...item, completed: !item.completed }))()
          : item
      );

    case DELETE_ALL_TODO:
      return (state = action.payload);

    default:
      return state;
  }
};

export default reducer;
