import { Children, useState } from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <ul className="navClass">
                <li> 
                    <Dropdown options={['claro','oscuro']}>color</Dropdown>
                </li>
                <li> 
                    <Dropdown options={['a3','a4']}>tamaño</Dropdown>
                </li>
                <li> 
                    <Dropdown options={['poster','cuadro']}>presentación</Dropdown>
                </li>
            </ul>

        </nav>
    )
}

function Dropdown({ children, options = [] }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(!open)} className='nav-button'>
                {children}
            </button>
            <div className={`dropdown ${open ? 'mostrar' : 'esconder'}`}>
                {options.map((option, key) => (
                    <a key={key} href="#" className="dropdown-option">
                        {option}
                    </a>
                ))}
            </div>
        </>
    );
}

export default NavBar
