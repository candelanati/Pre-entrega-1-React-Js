import './Button.css'

function Button (props){
    return(
        <button className='button-order'>{props.text}</button>
    )
}

export default Button