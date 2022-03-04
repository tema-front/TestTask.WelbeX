import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addNewTodo } from "../store/todos/actions"

// Компонент добавления нового todo
export const AddingNewTodo = () => {
    const [valueNewTodo, setValueNewTodo] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleValueNewTodo = (event) => {
        setValueNewTodo(event.target.value)
    }

    const handleAddNewTodo = (event) => {
        event.preventDefault();
        if (!valueNewTodo) return;
        navigate('/todos/1')
        dispatch(addNewTodo(valueNewTodo))
        setValueNewTodo('');
    }

    return (
        <form className="todo-form">
            <input onChange={event => handleValueNewTodo(event)} className="todo-form-input" type={'text'} value={valueNewTodo} />
            <input onClick={event => handleAddNewTodo(event)} className="todo-form-submit" type={'submit'} value='+' />
        </form>
    )
}