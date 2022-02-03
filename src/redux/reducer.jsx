import TodoListReducer  from "../components/TodoList/TodosSlice";
import filterReducer from "../components/Filters/FiltersSlice"
import { combineReducers } from "redux";

// const rootReducer = (state={}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: TodoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: TodoListReducer
}
)

export default rootReducer;
