export const ADD_TODOS = 'TODOS:ADD_TODOS';
export const DELETE_TODO = 'TODOS:DELETE_TODO';
export const ADD_NEW_TODO = 'TODOS:ADD_NEW_TODO';
export const ADD_LAST_EXISTED_TODO_ID = 'TODOS:ADD_LAST_EXISTED_TODO_ID';
export const CHANGE_TODO_VALUE = 'TODOS:CHANGE_TODO_VALUE';

const addTodos = (todoInfo) => ({
    type: ADD_TODOS,
    payload: todoInfo
})

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId
})

export const addNewTodo = (text) => ({
    type: ADD_NEW_TODO,
    payload: text
})

export const addLastExistedTodoId = (id) => ({
    type: ADD_LAST_EXISTED_TODO_ID,
    payload: id
})

export const changeTodoValue = (id, newValue) => ({
    type: CHANGE_TODO_VALUE,
    payload: {id, newValue}
})

export const requestTodosData = () => async (dispatch, getState) => {
    // Динамический запрос по 10 todo
    // Определяю начало загружаемого todo (id последнего + 1) 
    let todosStart = getState().stateTodos.lastExistedTodoId + 1
    let todosList = [];
    for (let id = todosStart; id < todosStart + 10; id++) {
        try {
            const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            if (!request.ok) {
                throw new Error('Error request.ok');
            }
            const result = await request.json();
            todosList.push(result);
        } catch(error) {
            console.log(error);
        }
    }
    
    dispatch(addTodos(todosList))
    dispatch(addLastExistedTodoId(todosList?.[todosList.length - 1].id))
}

export const requestTodo = () => async (dispatch, getState) => {
    let todoId = getState().stateTodos.lastExistedTodoId + 1
    let todosList = [];
    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        if (!request.ok) {
            throw new Error('Error request.ok');
        }
        const result = await request.json();
        todosList.push(result);
    } catch(error) {
        console.log(error);
    }

    dispatch(addTodos(todosList))
    dispatch(addLastExistedTodoId(todosList?.[todosList.length - 1].id))
}