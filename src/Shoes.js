import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./store/context"



function Shoes() {

    const {cartItem,updateCart} = useContext(myContext)

    let history = useHistory();


    function gotoAppliance() {
        history.push("/appliance");
        }
        
    function gotoComputers() {
        history.push("/computers");
    }

    function updateShoecart() {
        updateCart();
    }


    return (
        <div>
            <h1>This is a Shoes Page</h1>
            <p>Cart : {cartItem}</p>
            <p>
                <button onClick={updateShoecart}>Add Shoe to Cart</button>
                </p>
            <p><button onClick={gotoAppliance}>Appliance</button> </p>
            <button onClick={gotoComputers}>Computers</button>
        </div>
    )
}


export default Shoes;