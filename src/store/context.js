import { createContext,useState } from "react"



let myContext = createContext();


function MyProvider(props) {
    const [cartItem, setCartItem] = useState(0)
    
    function updateCart() {
        let newItem = cartItem +1
    setCartItem(newItem)
}

    return (
        <myContext.Provider value={{ setCartItem, updateCart, cartItem }}>
            {props.children}
         </myContext.Provider>
    )
}


export {
    MyProvider, myContext
};