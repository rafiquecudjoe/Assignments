



function InputField(props) {
    return (
        <>
            <input
                placeholder={props.placeholder}
                className={props.className}
                type={props.type}
                value={props.value}
            />
        </>
    )
    
}


export default InputField ;