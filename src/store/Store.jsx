import { createStore } from "redux";
import reducer from "../reducer/TodoReducer";

const Store = createStore(reducer);

export default Store;
