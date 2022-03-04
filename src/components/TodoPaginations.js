import { Link, useParams } from "react-router-dom"

// Компонент пагинации по спискам todo
export const TodoPagination = () => {
    const { pageId } = useParams();

    return (
        <div className="todo-pagination">
            <Link to={(+pageId !== 1) && (`/todos/${+pageId - 1}`)} className="todo-pagination-item-btn" >Prev</Link>
            <Link to={`/todos/${+pageId + 1}`} className="todo-pagination-item-btn" >Next</Link>
        </div>
    )
}