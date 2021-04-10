import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./store/context";


function Appliance() {

    const { cartItem, updateCart } = useContext(myContext);

  let history = useHistory();

  function gotoComputers() {
    history.push("/computers");
    }
    
    function gotoShoes() {
        history.push("/shoes")
    }
    function updateCartitem() {
        updateCart();
            }

  return (
    <div>
          <h1>This is an Appliance Page</h1>
          <p>Cart : {cartItem} </p>
          <p>
              <button onClick={updateCartitem}>Add to Appliance</button>
          </p>
      <p>
        <button onClick={gotoComputers}>Computers</button>{" "}
      </p>
          <button onClick={gotoShoes }>Shoes</button>
    </div>
  );
}

export default Appliance;
