import { Link } from "react-router-dom"

// Компонент заголовока с навигацией
export const Header = () => {
    return (
        <header className="header">
            <h2 className="header-title">WelbeX. Test task</h2>
            <nav className="header-nav">
                <Link to={'/main'} className="header-nav-link">Main</Link>
                <Link to={'/todos/1'} className="header-nav-link">Todos</Link>
            </nav>
        </header>
    )
}