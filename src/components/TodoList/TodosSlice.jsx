const initialState = [
    {
        id: 1,
        name: 'Learn Reactjs',
        completed: true,
        priority: 'Medium'
    },
    {
        id: 2,
        name: 'Learn JavaScript',
        completed: false,
        priority: 'High'
    },
    {
        id: 3,
        name: 'Learn Redux',
        completed: true,
        priority: 'Low'
    },
]

const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ];
        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo)
        default:
            return state;
    }
}

export default TodoListReducer;