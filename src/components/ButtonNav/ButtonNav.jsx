

 const ButtonNav = (props) =>{
    // console.log(props)
    return(
        <button onClick={props.onClick} className={props.className}>{props.texto}</button>
    )
}

export default ButtonNav