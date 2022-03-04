import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { getTodosList } from "../store/todos/selectors"
import { Header } from "./Header"
import { requestTodosData } from "../store/todos/actions"
import { AddingNewTodo } from "./AddingNewTodo";
import { TodoItem } from "./TodoItem";
import { TodoPagination } from "./TodoPaginations";

export const Todos = () => {
    // Сюда будут попадать загруженные и добавленные todo
    const todosList = useSelector(getTodosList);
    const { pageId } = useParams();
    const dispatch = useDispatch();
    // Сюда будет попадать список из десяти todo для рендера (он зависит он пагинации)
    const [renderingList, setRenderingList] = useState([]);
    // Состояние CircularProgress из Material UI. Отображается при загрузке todo
    const [circularProgress, setCircularProgress] = useState(false);

    useEffect(() => {
        // На странице показываю список todo по десять штук
        debugger
        let startRenderingList = 10 * pageId - 10;
        let newRenderingList = todosList?.slice(startRenderingList, startRenderingList + 10);
        // Если списка для рендера нет или он неполон, то загрузим todo
        if (!newRenderingList.length || ((newRenderingList.length !== 10) && (newRenderingList.length !== 9))) { 
            setCircularProgress(true);
            setRenderingList([]);
            dispatch(requestTodosData());
        } else {
            setCircularProgress(false);
            setRenderingList(newRenderingList)
        }
    }, [pageId, todosList])
    

    return (
        <>
        <Header />
        <section className="todo">
            <h3 className="todo-title">todolist</h3>
            <AddingNewTodo />
            {circularProgress && 
                <div className="todo-circular-progress">
                    <CircularProgress color="secondary" size={100} className="circular-progress" />
                </div>
            }
            <TodoItem todoList={renderingList} />
            <TodoPagination />
        </section>
        </>
    )
}