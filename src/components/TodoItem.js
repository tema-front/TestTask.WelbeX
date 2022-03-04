import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { changeTodoValue } from "../store/todos/actions";
import { TodoSettings } from "./TodoSettings";

// Компонент одного todo
export const TodoItem = ({ todoList }) => {
    // Сюда попадает id todo, который мы редактируем
    const [todoEditId, setTodoEditId] = useState(0);
    const [newValueTodo, setNewValueTodo] = useState('');
    const { pageId } = useParams();
    const dispatch = useDispatch();
    const editRef = useRef();

    const handleNewValueTodo = (event) => {
        setNewValueTodo(event.target.value)
    }

    // Открытие и закрытие с сохранением значения редактора todo
    const handleOpeningEdit = (id, value) => {
        if (!todoEditId) {
            setTodoEditId(id);
            setNewValueTodo(value);
        } else {
            setTodoEditId(0);
            setNewValueTodo('');
        }
        handleChangeTodo();
    }

    const handleChangeTodo = () => {
        if (!newValueTodo) return
        dispatch(changeTodoValue(todoEditId, newValueTodo));
        setTodoEditId(0);
    }

    // Фокус на input при открытии редактирования todo
    useEffect(() => {
        if (todoEditId) editRef.current.focus();
    }, [todoEditId])


    return (
        <>
        {todoList?.map((item, i) => 
            <div key={item.id} className="todo-item">
                {pageId * 10 - 9 + i}.&nbsp; 
                {(todoEditId === item.id) ?
                    <form onSubmit={() => handleChangeTodo(item.id)} className="todo-item-edit">
                        <input ref={editRef} onChange={event => handleNewValueTodo(event)} className="todo-item-edit-input" type={'text'} value={newValueTodo} /> 
                    </form>
                    : 
                    <p>{item.title}</p>
                }
                
                <TodoSettings todo={item} openEditTodo={handleOpeningEdit} />
            </div>
        )}
        </>
    )
}