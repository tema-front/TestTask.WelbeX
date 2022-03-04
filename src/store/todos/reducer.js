import { ADD_LAST_EXISTED_TODO_ID, ADD_NEW_TODO, ADD_TODOS, CHANGE_TODO_VALUE, DELETE_TODO } from "./actions";

const initialState = {
    todosList: [],
    lastExistedTodoId: 0
}

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODOS: {
            return {
                ...state, 
                todosList: [...state.todosList, 
                    ...payload
                ]
            }
        }

        case DELETE_TODO: {
            const newTodosList = state.todosList.filter(item => item.id !== payload) || [];
            return {
                ...state,
                todosList: newTodosList
            }
        }

        case ADD_NEW_TODO: {
            const newTodosList = [...state.todosList]
            newTodosList.unshift({id: `todo-${Date.now()}`, title: payload})
            return {
                ...state,
                todosList: newTodosList
            }
        }

        case ADD_LAST_EXISTED_TODO_ID: {
            return {
                ...state,
                lastExistedTodoId: payload
            }
        }

        case CHANGE_TODO_VALUE: {
            const indexTodo = state.todosList.findIndex(todo => todo.id === payload.id);
            let newTodosList = [...state.todosList]
            newTodosList[indexTodo].title = payload.newValue
            return {
                ...state,
                todosList: newTodosList
            }
        }

        default: return state;
    }
}