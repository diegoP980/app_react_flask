import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <Link to={"/"} className='navbar-brand d-flex'>
                            <img className='me-2' src="./vite.svg" alt="" />
                            My Task List
                        </Link>
                        <ul className='navbar-nav me-auto d-flex flex-row gap-3'>
                            <li className='nav-item'>
                                <Link to={"/create"} className='nav-link'>Crear</Link>
                            </li>
                        </ul>
                        <form className='d-flex gap-2 m-0' role='search'>
                            <input className='form-control' type="search" placeholder='Buscar una task...' />
                            <button className='btn btn-secondary'>Buscar</button>
                        </form>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default NavBar;