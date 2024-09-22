import React, { useState } from 'react';
import './NavBar.css';
import Ticket from '../Ticket/Ticket';
import ButtonNav from '../ButtonNav/ButtonNav';

function NavBar() {
    const [Opciones, setOpciones] = useState({
        color: "---",
        tamanio: "---",
        presentacion: "---"
    });

    function HandleClick(option) {
        console.log("click en un boton: " + option);

        if (option === "claro" || option === "oscuro") {
            setOpciones(prevState => ({ ...prevState, color: option }));
        }
        if (option === "a3" || option === "a4") {
            setOpciones(prevState => ({ ...prevState, tamanio: option }));
        }
        if (option === "poster" || option === "cuadro") {
            setOpciones(prevState => ({ ...prevState, presentacion: option }));
        }
        console.log(Opciones.color + " dentro de HandleClick");
    }

    return (
        <nav>
            <ul className="navClass">
                <li>
                    <Dropdown options={['claro', 'oscuro']} HandleClick={HandleClick}>color</Dropdown>
                </li>
                <li>
                    <Dropdown options={['a3', 'a4']} HandleClick={HandleClick}>tamaño</Dropdown>
                </li>
                <li>
                    <Dropdown options={['poster', 'cuadro']} HandleClick={HandleClick}>presentación</Dropdown>
                </li>
            </ul>
            <div>
                <Ticket opciones={Opciones} />
            </div>
        </nav>
    );
}

function Dropdown({ children, options = [], HandleClick }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(!open)} className='nav-button'>
                {children}
            </button>
            <div className={`dropdown ${open ? 'mostrar' : 'esconder'}`}>
                {options.map((option, key) => (
                    <ButtonNav onClick={() => HandleClick(option)} texto={option} key={key} className="dropdown-option" />
                ))}
            </div>
        </>
    );
}

export default NavBar