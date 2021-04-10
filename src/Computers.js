import { useHistory } from "react-router-dom"
import { useContext } from 'react';
import {myContext}  from "./store/context"


function Computers() {

    const { cartItem, updateCart } = useContext(myContext);

    let history = useHistory();


    function gotoAppliance() {
        history.push("/appliance");
        }
        
    function gotoShoes() {
        history.push("/shoes");
    }

    function updateComCart() {
        updateCart();
        
    }

    return (
        <div>
            <h1>This is a Computers Page</h1>
            <p>Cart : {cartItem}</p>
            <p>
              <button onClick={updateComCart}>Add Computer to Cart</button>
          </p>
            <p><button onClick={gotoAppliance}>Appliance</button> </p>
            <button onClick={gotoShoes}>Shoes</button>
        </div>
    )
}


export default Computers;