import { children, useState } from 'react'
import './NavBar.css'
import Ticket  from '../Ticket/Ticket';
import ButtonNav from '../ButtonNav/ButtonNav';

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
            <div>
                <Ticket/>
            </div>

        </nav>
    )
}

function AgregaATicket (){
    console.log("click en un boton: ")

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
                    <ButtonNav onClick={AgregaATicket} texto={option} key={key} className="dropdown-option"/>
                ))}
            </div>
        </>
    );
}

export default NavBar
