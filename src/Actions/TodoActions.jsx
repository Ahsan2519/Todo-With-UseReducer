// Todos Actions
export const Add_TODO = "Add_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_ALL_TODO = "DELETE_ALL_TODO";
export const COMPELETE_TODO = "COMPELETE_TODO";

// Todos Actions Creater
export const addTodos = (todoVal) => {
  return { type: Add_TODO, payload: todoVal };
};
export const editTodo = (todoVal, editingIndex) => {
  return {
    type: EDIT_TODO,
    payload: { id: editingIndex, todoValue: todoVal },
  };
};
export const deleteTodos = (id) => {
  return { type: DELETE_TODO, payload: id };
};
export const deleteAlls = (deleteTodos) => {
  return { type: DELETE_ALL_TODO, payload: deleteTodos };
};
export const completeTodo = (idx) => {
  return { type: COMPELETE_TODO, payload: idx };
};
