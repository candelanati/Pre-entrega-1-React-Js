

 const ButtonNav = (props) =>{
    return(
        <button onClick={props.onClick} className={props.className}>{props.texto}</button>
    )
}

export default ButtonNav