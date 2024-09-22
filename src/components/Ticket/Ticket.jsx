import { Children, useState } from 'react';
import './Ticket.css';

function Ticket (opciones){
    console.log(opciones)
    return (
        <>
            <div className='ticket-class'>
                <p>* * * Ticket de pedido * * *</p>
                <hr />
                <p>1. color: {opciones.opciones.color}</p>
                <p>2. tamaño: {opciones.opciones.tamanio}</p>
                <p>3. presentación: {opciones.opciones.presentacion}</p>
                
            </div>
        </>
    )
}

export default Ticket