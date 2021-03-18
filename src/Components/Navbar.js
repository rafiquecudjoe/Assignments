function Navbar(props) {
    return (
        <div>
            <nav style={{ backgroundColor: props.color }} height={props.height}>
                {props.text}
           </nav>
        </div>
    )
    
}

export default Navbar;