import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Main } from './Main'
import { Todos } from './Todos'

// Навигация
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/main' element={<Main />} />
                <Route path='/todos'>
                    <Route path=':pageId' element={<Todos />} />
                </Route>
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path='*'  element={<Navigate replace to="/main" />} />
            </Routes>
        </BrowserRouter>
    )
}
