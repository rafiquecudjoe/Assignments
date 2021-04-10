import './App.css';
import { Route, Switch } from "react-router-dom"
import Shoes from "./Shoes"
import Appliance from "./Appliance"
import Computers from "./Computers"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/appliance" component={Appliance} />
        <Route exact path="/computers" component={Computers}/>
      </Switch>
      
    </div>
  );
}

export default App;
