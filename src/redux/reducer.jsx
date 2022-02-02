const initialState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
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
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ],
            }
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;