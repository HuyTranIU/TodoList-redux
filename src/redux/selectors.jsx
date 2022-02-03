import { createSelector } from 'reselect'

export const searchTextSelector = (state) => state.filters.search;
export const statusStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const filtersPrioritiesSelector = (state) => state.filters.priorities;

export const todoRemainingSelector =
    createSelector(
        todoListSelector,
        searchTextSelector,
        statusStatusSelector,
        filtersPrioritiesSelector,
        (todoList, searchText, status, priorities) => {
            return todoList.filter(todo => {
                if (status === 'All') {
                    return priorities.length 
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText)
                }

                return todo.name.includes(searchText) &&
                    (status === 'Completed' ? todo.completed : !todo.completed)
                    && (priorities.length ? priorities.includes(todo.priority) : true)
            })
        })
