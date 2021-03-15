

function Button(props) {
    
    return (
        <button style={{backgroundColor:props.color}} OnclickButton={props.OnclickButton}>
           
            
            {props.text}
        </button>
    )
}

export default Button;