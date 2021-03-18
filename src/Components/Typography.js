
function Typography(props) {
    return (
        <div>
            <h1 style={{
                fontStyle: props.fontStyle,
                fontFamily: props.fontFamily
            }} >
            {props.text}
            </h1>
        </div>
    )
    
}

export default Typography;