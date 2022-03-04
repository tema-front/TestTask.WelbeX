import { Header } from './Header'
import welbexLogo from '../img/welbex-logo.png'

// Компонент главной страницы с описанием
export const Main = () => {
    return (
        <>
        <Header />
        <div className='main-content'>
            <img src={welbexLogo} className="main-content-logo" alt='welbex-logo' height="206"/>
            <h3 className='main-content-title'>Test task</h3>
            <div className='main-content-info'>
                <p className='main-content-info-text'>
                    Hello. This is my solution to the test task from the company WelbeX.
                    In this application, i have implemented a todo list that meets all the requirements set:
                </p>
                <ul className='main-content-info-list'>
                    <li>Uploading data for the todo list via API</li>
                    <li>Adding todo</li>
                    <li>Changing todo</li>
                    <li>Deleting rodo</li>
                </ul>
            </div>

        </div>
        </>
    )
}