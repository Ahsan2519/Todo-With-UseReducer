const storedValue = localStorage.getItem("todovalue");
const initialTodo = storedValue ? JSON.parse(storedValue) : [];

const initialState = initialTodo;
const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [
        ...state,
        {
          id: state.length + 1,
          todoValue: action.payload,
          completed: false,
        },
      ];
    case "deleteTodo":
      return state.filter((del) => del.id !== action.payload);

    case "editTodo":
      return state.map((edit) =>
        edit.id === action.payload.id
          ? (() => ({
              ...edit,
              todoValue: action.payload.todoValue,
              id: action.payload.id,
            }))()
          : edit
      );

    case "completeTodo":
      return state.map((item) =>
        item.id === action.payload
          ? (() => ({ ...item, completed: !item.completed }))()
          : item
      );

    case "deleteAll":
      return (state = action.payload);

    default:
      return state;
  }
};

export { storedValue, initialState, reducer };
